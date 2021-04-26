import React, {FC} from 'react'
import ReactPaginate from "react-paginate"
import styles from './Pagination.module.css'
import pageNavigate from '../../../assets/icon/chevron_right_24px.png'
import Select from 'react-select'
import {customStyles} from "../../../styles/uiStyles/SelectStyles"
import {getTeamsThunkCreator} from "../../../modules/team/teamThunk"
import {getPlayersThunkCreator} from "../../../modules/player/playerThunk"
import {useAppDispatch} from "../../../core/redux/store"

export const CustomPagination: FC<{
    team?: boolean
    itemsCount: number
    pageSize: number
    query: URLSearchParams
    history: any
    search: string
    select?: { value?: string, label?: string }[]
    currentPage: number
}> = ({
          team,
          itemsCount,
          pageSize,
          query,
          history,
          search,
          select,
          currentPage
      }) => {
    const selectTeams = select && select.map(team => team)

    const dispatch: any = useAppDispatch()

    const onPageChanged = ({selected}: any) => {
        if (team) {
            dispatch(getTeamsThunkCreator({teamName: search || '', currentPage: selected + 1, pageSize}))
        } else {
            dispatch(getPlayersThunkCreator({
                playerName: search || '',
                TeamIds: selectTeams,
                currentPage: selected + 1,
                pageSize
            }))
        }
        if (!query.has('page') && selected !== 0) {
            query.append('page', selected + 1)
            history.push(`?${query.toString()}`)
        } else if (query.has('page') && selected !== 0) {
            query.set('page', selected + 1)
            history.push(`?${query.toString()}`)
        } else {
            query.delete('page')
            history.push(`?${query.toString()}`)
        }
    }

    const options = [
        {value: '6', label: '6'},
        {value: '12', label: '12'},
        {value: '24', label: '24'}
    ]

    const onChange = (e: any) => {
        if (team && e.value !== pageSize) {
            dispatch(getTeamsThunkCreator({teamName: search || '', currentPage: 1, pageSize: e.value}))
        }
        if (!team && e.value !== pageSize) {
            dispatch(getPlayersThunkCreator({
                playerName: search || '',
                TeamIds: selectTeams,
                currentPage: 1,
                pageSize: e.value
            }))
        }
        if (Number(e.value) !== pageSize) {
            query.delete('page')
            history.push(`?${query.toString()}`)
        }
    }

    return (

        <div className={styles.PaginationWithSelectBlock}>
            {itemsCount / pageSize > 1 || pageSize !== 6
                ? <>
                    <div className={styles.paginationBlock}>
                        <ReactPaginate
                            previousLabel={<div><img src={pageNavigate} alt="pageNavigate"/></div>}
                            nextLabel={<div><img src={pageNavigate} alt="pageNavigate"/></div>}
                            breakLabel={'...'}
                            pageCount={itemsCount / pageSize}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={3}
                            onPageChange={onPageChanged}
                            forcePage={currentPage
                                ? currentPage - 1
                                : 0}

                            containerClassName={styles.container}
                            pageClassName={styles.pageListItem}
                            activeClassName={styles.active}
                            previousClassName={styles.prevBlock}
                            nextClassName={styles.nextBlock}
                        />
                    </div>
                    <div className={styles.selectBlock}>
                        <Select menuPlacement="top"
                                onChange={onChange}
                                styles={customStyles}
                                options={options}
                                defaultValue={options[0]}/>
                    </div>
                </>
                : ''
            }
        </div>
    )
}