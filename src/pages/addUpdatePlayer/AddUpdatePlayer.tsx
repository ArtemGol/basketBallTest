import React, {useEffect, useCallback, ChangeEvent} from "react";
import { WithHeaderSideBarLayout } from "../../component/WithHeaderSideBarLayout";
import { HeadBlockAddUpdateItem } from "../../component/forAddUpdate/HeadBlockAddUpdateItem";
import { Form } from "react-final-form";
import { CustomField, CustomSelectField } from "../../component/common/forms/CustomField";
import { CustomButton } from "../../component/ui/CustomButton";
import { CustomFileField } from "../../component/common/forms/CustomFileField";
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
import {mainRoutes} from "../routes";
import {AddItemFormStyles} from "../addUpdateTeam/AddUpdateTeam";
import {useDispatch} from "react-redux";

export const AddUpdatePlayer = () => {
  const history = useHistory();
  const { updatePlayer, positions, initialized } = usePlayerSelector(state => state.player);
  const { teamCount } = useTeamSelector(state => state.team)
  const dispatch: any = useDispatch();

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
        console.log(file)
      const File = file && file[0];
      const formData = new FormData();
      formData.append("file", File);
      if (formData) {
        if (updatePlayer) {
          await dispatch(
            updatePlayerThunkCreator({
              name,
              number,
              position: position.label ? position.label : updatePlayer.position,
              team: updatePlayer.team,
              birthday,
              height,
              weight,
              avatarUrl: File ? formData : undefined,
              avatarUrlString: updatePlayer.avatarUrl || undefined,
              id: updatePlayer.id,
            })
          ).then(unwrapResult);
        } else {
          await dispatch(
            addPlayerThunkCreator({
              name,
              number,
              position: position.label,
              team: team.value,
              birthday,
              height,
              weight,
              avatarUrl: formData
            })
          ).then(unwrapResult);
        }
        history.push(mainRoutes.CardPlayersPath);
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
