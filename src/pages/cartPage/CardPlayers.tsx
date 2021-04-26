import React, {useEffect, useMemo} from 'react'
import {CartItemComponent} from "./components/CartItemComponent"
import {WithHeaderSideBarLayout} from "../WithHeaderSideBarLayout"
import {SearchButtonCard} from "./components/SearchButtonCard"
import {CustomPagination} from "../helpers/pagination/CustomPagination"
import {CardItemsStyles} from "../../styles/forCart/CardItemsMurkup"
import {setPlayerSearch, usePlayerSelector} from "../../modules/player/playerSlice"
import {getTeamsThunkCreator} from "../../modules/team/teamThunk"
import {getPlayersThunkCreator} from "../../modules/player/playerThunk"
import {useTeamSelector} from "../../modules/team/teamSlice"
import {useQuery} from "../../hooks/hooks"
import {useHistory} from "react-router"
import {EmptyHere} from "./components/EmptyHere"
import {Preloader} from "../helpers/preloader/Preloader"
import {useAppDispatch} from "../../core/redux/store"

export const CardPlayers = () => {
  const dispatch: any = useAppDispatch()
  const query: URLSearchParams = useQuery()
  const history: any = useHistory()
  const {teamCount} = useTeamSelector(state => state.team)
  const teamsOptions = useTeamSelector(state => state.team?.teams.map(option => {
    return {value: option.id, label: option.name}
  }))

  useEffect(() => {
    const searchText = query.get('searchText')
    const FirstLetter = searchText?.slice(0, 1).toUpperCase() || ''
    const RestLetters = searchText?.slice(1, searchText.length) || ''
    searchText && dispatch(setPlayerSearch(FirstLetter + RestLetters))
    dispatch(getTeamsThunkCreator({teamName: '', currentPage: 1, pageSize: teamCount}))
    dispatch(getPlayersThunkCreator({
      playerName: FirstLetter + RestLetters || '',
      currentPage: Number(query.get('page')) || 1,
      pageSize: 6
    }))
    //eslint-disable-next-line
  }, [])

  const {
    players,
    pageSize,
    playerCount,
    search,
    select,
    currentPage,
    player,
    initialized
  } = usePlayerSelector(state => state.player)

  const cartPlayer = useMemo(() =>
    players.map(
      player => <CartItemComponent
        key={player.id}
        id={player.id}
        name={player.name}
        number={player.number}
        data={player.team}
        image={player.avatarUrl}/>),
      [players])
  return (
    <WithHeaderSideBarLayout>
      <SearchButtonCard hasSelect
                        pageSize={pageSize}
                        query={query}
                        options={teamsOptions}
                        search={search}
                        select={select}
                        addingItem={player}/>
      {!initialized
        ? <CardItemsStyles items={players}>
          {players && players.length > 0
            ? cartPlayer
            : <EmptyHere/>
          }
        </CardItemsStyles>
        : <Preloader/>
      }

      <CustomPagination pageSize={pageSize}
                        itemsCount={playerCount}
                        history={history}
                        query={query}
                        search={search}
                        select={select}
                        currentPage={currentPage}/>
    </WithHeaderSideBarLayout>
  )
}