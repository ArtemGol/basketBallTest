import React, {ChangeEvent, useCallback} from "react";
import { AddItemFormStyles } from "../../styles/FormStyles/FormStyles";
import { CustomField } from "../helpers/forms/CustomField";
import { CustomButton } from "../../ui/CustomButton";
import { Form } from "react-final-form";
import { WithHeaderSideBarLayout } from "../WithHeaderSideBarLayout";
import { HeadBlockAddUpdateItem } from "./components/HeadBlockAddUpdateItem";
import {
  addTeamThunkCreator,
  updateTeamThunkCreator,
} from "../../modules/team/teamThunk";
import { CustomFileField } from "../helpers/forms/CustomFileField";
import { AddItemStyles } from "../../styles/forAdd/AddItemStyles";
import { required1 } from "../helpers/forms/validarors";
import { useTeamSelector } from "../../modules/team/teamSlice";
import { useHistory } from "react-router";
import { unwrapResult } from "@reduxjs/toolkit";
import {useAppDispatch} from "../../core/redux/store";

export const AddUpdateTeam = () => {
  const history = useHistory();
  const { updateTeam, initialized } = useTeamSelector(state => state.team);
  const dispatch: any = useAppDispatch();

  const onSubmit = useCallback(
    async ({ name, division, conference, foundationYear, file }) => {
      const File = file && file[0];
      const formData = new FormData();
      formData.append("file", File);
      if (formData) {
        if (updateTeam) {
          await dispatch(
            updateTeamThunkCreator({
              imageUrl: File ? formData : "",
              imageUrlString: updateTeam.imageUrl || "",
              name,
              division,
              conference,
              foundationYear,
              id: updateTeam.id,
            })
          ).then(unwrapResult);
        } else {
          await dispatch(
            addTeamThunkCreator({
              name,
              foundationYear,
              division,
              conference,
              imageUrl: formData,
            })
          ).then(unwrapResult);
        }

        history.push("/card_teams");
      }
    },
    [dispatch, history, updateTeam]
  );
  const GoBack = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    history.goBack();
  };
  return (
    <WithHeaderSideBarLayout>
      <HeadBlockAddUpdateItem updateItem={updateTeam} />
      <AddItemStyles>
        <Form
          onSubmit={onSubmit}
          validate={required1}
          initialValues={{ ...updateTeam }}
          render={({ handleSubmit }) => (
            <AddItemFormStyles onSubmit={handleSubmit} id={"addTeam"}>
              <CustomFileField
                name={"file"}
                itemImage={updateTeam?.imageUrl}
              />
              <div className={"secondColumn"}>
                <CustomField name={"name"} label={"Name"} />
                <CustomField name={"division"} label={"Division"} />
                <CustomField name={"conference"} label={"Conference"} />
                <CustomField
                  name={"foundationYear"}
                  label={"Year of foundation"}
                  type={"number"}
                />

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
      </AddItemStyles>
    </WithHeaderSideBarLayout>
  );
};
