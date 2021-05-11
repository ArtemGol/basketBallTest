import React, {ChangeEvent, useCallback} from "react";
import {ErrorStyles, Label} from "../../component/common/forms/CustomField";
import {CustomButton} from "../../component/ui/CustomButton";
import {WithHeaderSideBarLayout} from "../../component/WithHeaderSideBarLayout";
import {HeadBlockAddUpdateItem} from "../../component/forAddUpdate/HeadBlockAddUpdateItem";
import {
    addTeamThunkCreator,
    updateTeamThunkCreator,
} from "../../modules/team/teamThunk";
import {useTeamSelector} from "../../modules/team/teamSlice";
import {useHistory} from "react-router";
import {unwrapResult} from "@reduxjs/toolkit";
import {mainRoutes} from "../routes";
import {useForm} from "react-hook-form";
import {CustomInputFile} from "../../component/ui/CustomInputFile";
import {yupResolver} from '@hookform/resolvers/yup'
import {InputS} from "../../ui/InputS";
import {teamFormContent, schema} from "../../utils/teamFormContent";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import {useDispatch} from "react-redux";

export const AddUpdateTeam = () => {
    const history = useHistory();
    const {updateTeam, initialized} = useTeamSelector(state => state.team);
    const dispatch: any = useDispatch();

    const onSubmit = useCallback(
        async ({name, division, conference, foundationYear, imageUrl}) => {
            const formData = new FormData();
            formData.append("file", imageUrl);
            if (formData) {
                if (updateTeam) {
                    await dispatch(
                        updateTeamThunkCreator({
                            imageUrl: imageUrl?.size !== undefined ? formData : undefined,
                            imageUrlString: updateTeam.imageUrl || undefined,
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
                history.push(mainRoutes.CardTeamsPath);
            }
        },
        [dispatch, history, updateTeam]
    );
    const GoBack = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        history.goBack();
    }

    const {setValue, register, handleSubmit, formState: { errors }} = useForm(
        {
            resolver: yupResolver(schema),
            defaultValues: { ...updateTeam }
        })

    return (
        <WithHeaderSideBarLayout>
            <HeadBlockAddUpdateItem updateItem={updateTeam}/>
                <AddItemFormStyles onSubmit={handleSubmit(onSubmit)}>
                    <CustomInputFile type={'file'}
                                     name={"imageUrl"}
                                     setValue={setValue}
                                     defaultValue={updateTeam?.imageUrl}
                                     errors={errors.imageUrl}/>
                    <div className={"secondColumn"}>
                        {teamFormContent.inputs.map((input: any, key) => {
                            return (
                                <div key={key}>
                                    <Label>{input.label}</Label>
                                    <InputS type={input.type} {...register(input.name)} map/>
                                    {Object.keys(errors).find(key => key === input.name) &&
                                    <ErrorStyles>Required</ErrorStyles>
                                    }
                                </div>
                            )
                        })}
                        <div className={"double"}>
                            <CustomButton cancel onClick={GoBack} disabled={initialized}>
                                Cancel
                            </CustomButton>
                            <CustomButton disabled={initialized}>Save</CustomButton>
                        </div>
                    </div>
                </AddItemFormStyles>
        </WithHeaderSideBarLayout>
    );
};

export const AddItemFormStyles = styled.form`
  padding: 48px 20px;
  background-color: ${theme.white};
  border-radius: 0 0 10px 10px;
  grid-gap: 13%;
  display: flex;
  justify-content: center;
  width: 100%;
  .secondColumn {
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
  }

  .double {
    width: 364px;
    display: flex;
    justify-content: space-between;
    grid-gap: 24px;
    .forBirthday {
      width: 66%;
    }
    button {
      width: 100%;
    }
  }

  @media screen and ${deviceMax.xl} {
    .secondColumn {
      width: 50%;
    }
    padding: 0 2%;
    grid-gap: 3%;
    .double {
      width: 100%;
    }
  }
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .secondColumn {
      width: 100%;
    }
  }
`;