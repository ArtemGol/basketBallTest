import React, {useEffect, useCallback, ChangeEvent} from "react";
import {WithHeaderSideBarLayout} from "../../component/WithHeaderSideBarLayout";
import {HeadBlockAddUpdateItem} from "../../component/forAddUpdate/HeadBlockAddUpdateItem";
import {CustomButton} from "../../component/ui/CustomButton";
import {useHistory} from "react-router";
import {useTeamSelector} from "../../modules/team/teamSlice";
import {
  addPlayerThunkCreator,
  getPositionsThunkCreator,
  updatePlayerThunkCreator,
} from "../../modules/player/playerThunk";
import {usePlayerSelector} from "../../modules/player/playerSlice";
import {getTeamsThunkCreator} from "../../modules/team/teamThunk";
import {unwrapResult} from "@reduxjs/toolkit";
import {mainRoutes} from "../routes";
import {AddItemFormStyles, CustomField, Double, SecondColumn} from "../addUpdateTeam/AddUpdateTeam";
import {useDispatch} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {CustomSelect} from "../../component/ui/CustomSelect";
import {CustomInputFile} from "../../component/ui/CustomInputFile";
import {ErrorStyles, Label} from "../signIn/SignIn";
import {playerFormContent, playerSchema} from "../../utils/formsControl";
import {InputS} from "../../ui/InputS";
import {clearImageSource, useImageSelector} from "../../modules/image/imageSlice";

export const AddUpdatePlayer = () => {
  const history = useHistory();
  const {updatePlayer, positions, initialized} = usePlayerSelector(state => state.player);
  const {teamCount} = useTeamSelector(state => state.team)
  const dispatch: any = useDispatch();
  const imageUrlSource = useImageSelector(state => state.image.imageUrl)

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
      return {value: option.id, label: option.name};
    })
  );
  const positionsOptions = usePlayerSelector(
    state => state.player?.positions.map((option) => {
      return {value: option, label: option};
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
             avatarUrl
           }) => {
      const formData = new FormData();
      formData.append("file", avatarUrl);
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
              avatarUrl: avatarUrl?.size ? formData : undefined,
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
        imageUrlSource && dispatch(clearImageSource())
        history.push(mainRoutes.CardPlayersPath);
      }
    },
    [dispatch, history, imageUrlSource, updatePlayer]
  );
  const GoBack = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    history.goBack();
  };

  const {handleSubmit, setValue, control, register, formState: {errors}} = useForm({
    resolver: yupResolver(playerSchema),
    defaultValues: {...updatePlayer}
  })

  const playerFormFields = (val1: number, val2: number, double: boolean) => (
    <Double double={double}>
      {playerFormContent.inputs.slice(val1, val2).map((input: any, key) => {
        const error = Object.keys(errors).find(key => key === input.name)
        return (
          <CustomField key={key}>
            <Label>{input.label}</Label>
            {input?.select !== true
              ? <InputS type={input.type} {...register(input.name)}
                        error={error}/>
              : <Controller
                control={control}
                name={input.name}
                render={({field: {onChange}}) => (
                  <CustomSelect
                    onChange={val => onChange(val)}
                    error={error}
                    options={input.name === 'team' ? teamsOptions : positionsOptions}
                    disabled={input.name === 'team' ? Boolean(updatePlayer?.team) : false}
                    defaultValue={input.name === 'team'
                      ? {
                        label: updatePlayer?.teamName,
                        value: updatePlayer?.team
                      }
                      : {
                        label: updatePlayer?.position,
                        value: updatePlayer?.position
                      }
                    }/>
                )}
              />
            }
            {error && <ErrorStyles>Required</ErrorStyles>}
          </CustomField>
        )
      })}
    </Double>
  )

  return (
    <WithHeaderSideBarLayout>
      <HeadBlockAddUpdateItem player updateItem={updatePlayer}/>
      <AddItemFormStyles player onSubmit={handleSubmit(onSubmit)}>
        <CustomInputFile type={'file'}
                         name={"avatarUrl"}
                         setValue={setValue}
                         defaultValue={updatePlayer?.avatarUrl}
                         errors={errors.avatarUrl} player/>
        <SecondColumn>
          {playerFormFields(0, 3, false)}
          {playerFormFields(3, 5, true)}
          {playerFormFields(5, 7, true)}
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
}