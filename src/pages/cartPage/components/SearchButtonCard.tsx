import React, {ChangeEvent, FC} from 'react'
import {CustomInput} from "../../../ui/CustomInput"
import {CustomSelect} from "../../../ui/CustomSelect"
import {CustomButton} from "../../../ui/CustomButton"
import {SearchButtonCardStyles} from "../../../styles/forCart/CardItemsMurkup"
import {useHistory} from "react-router"
import {setTeamSearch, setTeamToAdd} from "../../../modules/team/teamSlice"
import {clearImageSource, useImageSelector} from "../../../modules/image/imageSlice"
import {setPlayerSearch, setPlayerSelect, setPlayerToAdd} from "../../../modules/player/playerSlice"
import {getTeamsThunkCreator} from "../../../modules/team/teamThunk"
import {getPlayersThunkCreator} from "../../../modules/player/playerThunk"
import {useAppDispatch} from "../../../core/redux/store";
import {PlayerInterFace} from "../../../modules/player/playerTypes";
import {MainRoutes} from "../../routes";
import {TeamInterface} from "../../../modules/team/teamTypes";

export const SearchButtonCard: FC<{
    hasSelect?: boolean
    pageSize: number
    query: URLSearchParams,
    options?: {value?: string | number, label?: string}[]
    search?: string
    select?: { value?: string, label?: string }[]
    addingItem: PlayerInterFace | TeamInterface | null
}> = ({
          hasSelect,
          pageSize,
          query,
          options,
          search, select,
          addingItem
      }) => {
    const history = useHistory()
    const dispatch: any = useAppDispatch()
    const {imageUrl} = useImageSelector(state => state.image)

    const onSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const FirstLetter = e.target.value.slice(0, 1).toUpperCase()
        const RestLetters = e.target.value.slice(1, e.target.value.length)

        query.delete('page')
        if (!hasSelect) {
            dispatch(setTeamSearch(FirstLetter + RestLetters))
            dispatch(getTeamsThunkCreator({
                teamName: (FirstLetter + RestLetters),
                currentPage: 1,
                pageSize
            }))
        } else {
            const selectTeams: any = select && select.map(team => team)
            dispatch(setPlayerSearch(FirstLetter + RestLetters))
            dispatch(getPlayersThunkCreator({
                playerName: (FirstLetter + RestLetters),
                TeamIds: selectTeams,
                currentPage: 1,
                pageSize
            }))
        }

        if (!query.has('searchText') && e.target.value) {
            query.append('searchText', e.target.value)
            history.push(`?${query.toString()}`)
        } else if (query.has('searchText') && e.target.value) {
            query.set('searchText', e.target.value)
            history.push(`?${query.toString()}`)
        } else {
            query.delete('searchText')
            history.push(`?${query.toString()}`)
        }
    }

    const onSelectChange = async (values: any) => {
        const FirstLetter = values?.target?.value?.slice(0, 1).toUpperCase()
        const RestLetters = values?.target?.value?.slice(1, values?.target?.value?.length)
        dispatch(getTeamsThunkCreator({
            teamName: (FirstLetter + RestLetters) || '',
            currentPage: 1,
            pageSize: 25
        }))
        query.delete('page')
        const selectTeamId = values?.length && values.map((item: any) => item.value)
        values?.target?.value === undefined && await dispatch(setPlayerSelect(selectTeamId))
        values?.target?.value === undefined && dispatch(getPlayersThunkCreator({
            playerName: search || '',
            TeamIds: selectTeamId,
            currentPage: 1,
            pageSize
        }))

    }

    const addItem = () => {
        history.push(hasSelect ? MainRoutes.AddUpdatePlayerPath.link : MainRoutes.AddUpdateTeamPath.link)
        if (hasSelect) {
            addingItem && dispatch(setPlayerToAdd())
        } else {
            addingItem && dispatch(setTeamToAdd())
        }
        imageUrl && dispatch(clearImageSource())
    }

    return (
        <SearchButtonCardStyles>
            <div className={'searchSelect'}>
                <CustomInput search onChange={onSearchChange} value={query.get('searchText') || ''}/>
                {hasSelect && <CustomSelect isMulti options={options} onChange={(values) => onSelectChange(values)}/>}
            </div>
            <CustomButton add onClick={addItem}>
                Add
            </CustomButton>
        </SearchButtonCardStyles>
    )
}