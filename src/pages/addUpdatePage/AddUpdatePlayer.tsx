import React, {useEffect, useCallback, ChangeEvent} from "react";
import { WithHeaderSideBarLayout } from "../WithHeaderSideBarLayout";
import { HeadBlockAddUpdateItem } from "./components/HeadBlockAddUpdateItem";
import { Form } from "react-final-form";
import { AddItemFormStyles } from "../../styles/FormStyles/FormStyles";
import { CustomField, CustomSelectField } from "../helpers/forms/CustomField";
import { CustomButton } from "../../ui/CustomButton";
import { CustomFileField } from "../helpers/forms/CustomFileField";
import { useHistory } from "react-router";
import { useTeamSelector } from "../../modules/team/teamSlice";
import {
  addPlayerThunkCreator,
  getPositionsThunkCreator,
  updatePlayerThunkCreator,
} from "../../modules/player/playerThunk";
import { usePlayerSelector } from "../../modules/player/playerSlice";
import { getTeamsThunkCreator } from "../../modules/team/teamThunk";
import { unwrapResult } from "@reduxjs/toolkit";
import {useAppDispatch} from "../../core/redux/store";
import {MainRoutes} from "../routes";

export const AddUpdatePlayer = () => {
  const history = useHistory();
  const { updatePlayer, positions, initialized } = usePlayerSelector(state => state.player);
  const { teamCount } = useTeamSelector(state => state.team)
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(
      getTeamsThunkCreator({
        teamName: "",
        currentPage: 1,
        pageSize: teamCount,
      })
    );
    positions && dispatch(getPositionsThunkCreator());
    //eslint-disable-next-line
  }, []);

  const teamsOptions = useTeamSelector(
    state => state.team?.teams.map((option) => {
        return { value: option.id, label: option.name };
      })
  );
  const positionsOptions = usePlayerSelector(
    state => state.player?.positions.map((option) => {
        return { value: option, label: option };
      })
  );
  const onSubmit = useCallback(
    async ({
      name,
      number,
      position,
      team,
      birthday,
      height,
      weight,
      file,
    }) => {
      const File = file && file[0];
      const formData = new FormData();
      formData.append("file", File);
      if (formData) {
        if (updatePlayer) {
          console.log(File);
          await dispatch(
            updatePlayerThunkCreator({
              name,
              number,
              position: position.label ? position.label : updatePlayer.position,
              team: updatePlayer.team,
              birthday,
              height,
              weight,
              avatarUrl: File ? formData : "",
              avatarUrlString: updatePlayer.avatarUrl || "",
              id: updatePlayer.id,
            })
          ).then(unwrapResult);
        } else {
          // console.log({ formData });
          await dispatch(
            addPlayerThunkCreator({
              name,
              number,
              position: position.label,
              team: team.value,
              birthday,
              height,
              weight,
              avatarUrl: formData,
              avatarUrlString: "",
            })
          ).then(unwrapResult);
        }
        history.push(MainRoutes.CardPlayersPath.link);
      }
    },
    [dispatch, history, updatePlayer]
  );
  const GoBack = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <WithHeaderSideBarLayout>
      <HeadBlockAddUpdateItem player updateItem={updatePlayer} />
      <Form
        onSubmit={onSubmit}
        initialValues={{ ...updatePlayer }}
        render={({ handleSubmit }) => (
          <AddItemFormStyles onSubmit={handleSubmit} id={"addPlayer"}>
            <CustomFileField
              name={"file"}
              player
              itemImage={updatePlayer?.avatarUrl}
            />
            <div className={"secondColumn"}>
              <CustomField name={"name"} label={"Name"} />
              <CustomSelectField
                name={"position"}
                label={"Position"}
                options={positionsOptions}
                defaultValue={{
                    label: updatePlayer?.position,
                    value: updatePlayer?.position,
                  }}
              />
              <CustomSelectField
                name={"team"}
                label={"Team"}
                disabled={Boolean(updatePlayer?.team)}
                options={teamsOptions}
                defaultValue={{
                    label: updatePlayer?.teamName,
                    value: updatePlayer?.team,
                  }}
              />
              <div className={"double"}>
                <CustomField
                  double
                  name={"height"}
                  label={"Height (cm)"}
                  type={"number"}
                />
                <CustomField
                  double
                  name={"weight"}
                  label={"Weight (kg)"}
                  type={"number"}
                />
              </div>
              <div className={"double"}>
                <div className={"forBirthday"}>
                  <CustomField
                    double
                    name={"birthday"}
                    type={"datetime-local"}
                    label={"Birthday"}
                  />
                </div>
                <CustomField
                  double
                  name={"number"}
                  label={"Number"}
                  type={"number"}
                />
              </div>
              <div className={"double"}>
                <CustomButton cancel onClick={GoBack} disabled={initialized}>
                  Cancel
                </CustomButton>
                <CustomButton disabled={initialized}>Save</CustomButton>
              </div>
            </div>
          </AddItemFormStyles>
        )}
      />
    </WithHeaderSideBarLayout>
  );
};
