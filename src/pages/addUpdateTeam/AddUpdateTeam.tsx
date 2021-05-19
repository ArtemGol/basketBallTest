import React, {ChangeEvent, useCallback} from "react";
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
import {teamFormContent, teamFormSchema} from "../../utils/formsControl";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import {useDispatch} from "react-redux";
import {ErrorStyles, Label} from "../signIn/SignIn";
import {InputS} from "../../ui/InputS";
import {clearImageSource, useImageSelector} from "../../modules/image/imageSlice";

export const AddUpdateTeam = () => {
    const history = useHistory();
    const {updateTeam, initialized} = useTeamSelector(state => state.team);
    const imageUrlSource = useImageSelector(state => state.image.imageUrl)
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
                imageUrlSource && dispatch(clearImageSource())
                history.push(mainRoutes.CardTeamsPath);
            }
        },
        [dispatch, history, imageUrlSource, updateTeam]
    );
    const GoBack = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        history.goBack();
    }

    const {setValue, register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(teamFormSchema),
            defaultValues: {...updateTeam}
        })

    const teamFormFields = teamFormContent.inputs.map((input: any, key) => {
        const error = Object.keys(errors).find(key => key === input.name)
        return (
            <div key={key}>
                <Label>{input.label}</Label>
                <InputS type={input.type} {...register(input.name)}
                        error={error} map/>
                {error && <ErrorStyles>Required</ErrorStyles>}
            </div>
        )
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
                <SecondColumn>
                    {teamFormFields}
                    <Double double={true}>
                        <CustomButton cancel onClick={GoBack} disabled={initialized}>
                            Cancel
                        </CustomButton>
                        <CustomButton disabled={initialized}>Save</CustomButton>
                    </Double>
                </SecondColumn>
            </AddItemFormStyles>
        </WithHeaderSideBarLayout>
    );
};

export const AddItemFormStyles = styled.form<{ player?: boolean }>`
  padding: 48px 20px;
  background-color: ${theme.white};
  border-radius: 0 0 10px 10px;
  grid-gap: 13%;
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and ${deviceMax.xl} {
    padding: 0 2%;
    grid-gap: 3%;
  }
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const SecondColumn = styled.div<{ player?: boolean }>`
  display: flex;
  flex-direction: column;
  grid-gap: ${props => props.player ? '0' : '24px'};
  @media screen and ${deviceMax.xl} {
    width: 50%;
  }
  @media screen and ${deviceMax.md} {
    width: 100%;
  }
`

export const CustomField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const Double = styled.div<{ double: boolean }>`
  ${props => props.double && `
  width: 364px;
  display: flex;
  justify-content: space-between;
  grid-gap: 24px;

  button {
    width: 100%;
  }

  @media screen and ${deviceMax.xl} {
    width: 100%;
  }`}
`