import React from 'react'
import ReactPaginate from "react-paginate"
import pageNavigate from '../../../assets/icon/chevronRight.png'
import Select from 'react-select'
import {customStyles} from "../../../ui/SelectS"
import styled from "styled-components";
import {theme} from "../../../assets/constants/primitives"

interface IProps {
  itemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (selected: any) => void
  onSelectPageCountChange: (e: any) => void
}

const options = [
  {value: '6', label: '6'},
  {value: '12', label: '12'},
  {value: '24', label: '24'}
]

export const CustomPagination = ({
                                   itemsCount,
                                   pageSize,
                                   currentPage,
                                   onPageChanged,
                                   onSelectPageCountChange
                                 }: IProps) => (
  <PaginationWithSelectBlock>
    {itemsCount !== 0
      ? <>
        <PaginationBlock>
          <ReactPaginate
            previousLabel={<img src={pageNavigate} alt="pageNavigate"/>}
            nextLabel={<img src={pageNavigate} alt="pageNavigate"/>}
            breakLabel={'...'}
            pageCount={itemsCount / pageSize}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={onPageChanged}
            forcePage={currentPage
              ? currentPage - 1
              : 0}

            containerClassName={'container'}
            pageClassName={'pageListItem'}
            activeClassName={'active'}
            previousClassName={'prevBlock'}
            nextClassName={'nextBlock'}
          />
        </PaginationBlock>
        <SelectBlock>
          <Select menuPlacement="top"
                  onChange={onSelectPageCountChange}
                  styles={customStyles}
                  options={options}
                  defaultValue={options[0]}/>
        </SelectBlock>
      </>
      : ''
    }
  </PaginationWithSelectBlock>
)

const PaginationWithSelectBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const PaginationBlock = styled.div`

  .container {
    height: 40px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
  }

  .container a {
    color: ${theme.grey};
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .container a:focus {
    outline: none;
  }

  .container a:hover {
    border-radius: 4px;
    transition: 0.3s;
    background-color: ${theme.lightestRed};
    color: white;
  }

  .prevBlock {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .prevBlock:hover img, .nextBlock:hover img {
    filter: brightness(100);
  }

  .active a {
    color: ${theme.white};
    background-color: ${theme.red};
    cursor: default;
    border-radius: 4px;
  }

  .active a:hover {
    background-color: ${theme.red};
  }

  @media (max-width: 470px) {
    div {
      width: 20%;
    }

    .container {
      height: 28px;
      font-size: 12px;
    }

    .container a {
      width: 25px;
      height: 25px;
    }

    .container a:hover {
      color: ${theme.grey};
      background: none;
    }

    .prevBlock img, .nextBlock img {
      width: 4px;
    }

    .prevBlock, .nextBlock a:hover {
      background: none;
    }

    .prevBlock:hover img, .nextBlock:hover img {
      filter: brightness(0);
    }

    .pageListItem a:hover {
      background-color: ${theme.red};
      transition: 0s;
      color: white;
    }
`

const SelectBlock = styled.div`
  min-width: 88px;

  & > * {
    height: 40px;
  }

  @media (max-width: 470px) {
    min-width: 65px;
    height: 28px;

    svg {
      padding-bottom: 7px;
    }
  }
`