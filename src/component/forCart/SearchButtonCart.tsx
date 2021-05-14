import React, {ChangeEvent} from 'react'
import {InputLayout} from "../ui/InputLayout"
import {CustomSelect} from "../ui/CustomSelect"
import {CustomButton} from "../ui/CustomButton"
import styled from "styled-components"
import {deviceMax} from "../../assets/constants/primitives"
import {InputS} from "../../ui/InputS";
import {useQuery} from "../../hooks/hooks";
import {useTeamSelector} from "../../modules/team/teamSlice";

interface IProps {
    hasSelect?: boolean
    options?: { value: number, label: string }[]
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSelectChange?: (values: any) => void
    addItem: () => void
}

export const SearchButtonCart = ({
                                     hasSelect,
                                     onSearchChange,
                                     onSelectChange,
                                     addItem
                                 }: IProps) => {
    const teamsOptions = useTeamSelector(state => state.team?.teams.map(option => {
        return {value: option.id, label: option.name}
    }))
    const query: URLSearchParams = useQuery()
    return (
        <SearchButtonCardStyles>
            <SearchSelect>
                <InputLayout search>
                    <InputS search placeholder={'Search...'}
                            onChange={onSearchChange}
                            value={query.get('searchText') || ''}/>
                </InputLayout>
                {hasSelect && <CustomSelect isMulti options={teamsOptions} onChange={onSelectChange}/>}
            </SearchSelect>
            <CustomButton add onClick={addItem}>
                Add
            </CustomButton>
        </SearchButtonCardStyles>
    )
}

const SearchButtonCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 24px;
  margin-bottom: 32px;
  
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    grid-gap: 16px;
    margin-bottom: 16px;
  }
`

const SearchSelect = styled.div`
  min-width: 60%;
  display: flex;
  justify-content: space-between;
  grid-gap: 24px;
  @media screen and ${deviceMax.md} {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }  
`