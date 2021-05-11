import React, {ChangeEvent} from 'react'
import {CustomInput} from "../ui/CustomInput"
import {CustomSelect} from "../ui/CustomSelect"
import {CustomButton} from "../ui/CustomButton"
import styled from "styled-components"
import {deviceMax} from "../../assets/constants/primitives"

interface IProps {
    hasSelect?: boolean
    query: URLSearchParams,
    options?: {value: number, label: string}[]
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSelectChange?: (values: any) => void
    addItem: () => void
}

export const SearchButtonCart = ({
         hasSelect,
         query,
         options,
         onSearchChange,
         onSelectChange,
         addItem
      }: IProps) => (
        <SearchButtonCardStyles>
            <div className={'searchSelect'}>
                <CustomInput search onChange={onSearchChange} value={query.get('searchText') || ''}/>
                {hasSelect && <CustomSelect isMulti options={options} onChange={onSelectChange}/>}
            </div>
            <CustomButton add onClick={addItem}>
                Add
            </CustomButton>
        </SearchButtonCardStyles>
    )

const SearchButtonCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 24px;
  .searchSelect{
    min-width: 60%;
    display: flex;
    justify-content: space-between;
    grid-gap: 24px;
  }
  margin-bottom: 32px;
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    grid-gap: 16px;
    .searchSelect{
      display: flex;
      flex-direction: column;
      grid-gap: 16px;
    }
    margin-bottom: 16px;
  }
`