import React, {ChangeEvent, useCallback, useEffect, useMemo} from 'react'
import {CartItemComponent} from "../../component/forCart/CartItemComponent"
import {setPlayerSearch, setPlayerSelect, setPlayerToAdd, usePlayerSelector} from "../../modules/player/playerSlice"
import {getTeamsThunkCreator} from "../../modules/team/teamThunk"
import {getPlayersThunkCreator} from "../../modules/player/playerThunk"
import {useTeamSelector} from "../../modules/team/teamSlice"
import {useQuery} from "../../hooks/hooks"
import {useHistory} from "react-router"
import {urlPagination, urlSearch} from "../../utils/urlGolobalFunctions"
import {CartLayout} from "../../component/forCart/CartLayout";
import {mainRoutes} from "../routes";
import {useDispatch} from "react-redux";

export const CardPlayers = () => {
  const dispatch = useDispatch()
  const query: URLSearchParams = useQuery()
  const history = useHistory()
  const {teamCount, teams} = useTeamSelector(state => state.team)

  useEffect(() => {
    const searchText = query.get('searchText')
    searchText && dispatch(setPlayerSearch(searchText))
    dispatch(getTeamsThunkCreator({teamName: '', currentPage: 1, pageSize: teamCount}))
    dispatch(getPlayersThunkCreator({
      playerName: searchText || '',
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

  const onSearchChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    query.delete('page')
    const selectTeams: any = select && select.map(team => team)
    dispatch(setPlayerSearch(e.target.value))
    dispatch(getPlayersThunkCreator({
      playerName: e.target.value,
      TeamIds: selectTeams,
      currentPage: 1,
      pageSize
    }))
    urlSearch(query, history, e.target.value)
  }, [dispatch, history, pageSize, query, select])

  const onSelectChange = useCallback(async (values: any) => {
    console.log(values)
    dispatch(getTeamsThunkCreator({
      teamName: values?.target?.value || '',
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
  }, [dispatch, pageSize, query, search])

  const selectTeams = select && select.map(team => team)

  const onPageChanged = useCallback(({selected}: any) => {
      dispatch(getPlayersThunkCreator({
        playerName: search || '',
        TeamIds: selectTeams,
        currentPage: selected + 1,
        pageSize
      }))
      urlPagination(query, selected, history)
    }, [dispatch, history, pageSize, query, search, selectTeams]
  )

  const onSelectPageCountChange = useCallback((e: any) => {
    dispatch(getPlayersThunkCreator({
      playerName: search || '',
      TeamIds: selectTeams,
      currentPage: 1,
      pageSize: e.value
    }))
    if (e.value !== pageSize) {
      query.delete('page')
      history.push(`?${query.toString()}`)
    }
  }, [dispatch, history, pageSize, query, search, selectTeams])

  const addPlayer = () => {
    history.push(mainRoutes.AddUpdatePlayerPath)
    player && dispatch(setPlayerToAdd())
  }

  const cartPlayer = useMemo(() =>
      players.map(
        player => <CartItemComponent
          key={player.id}
          id={player.id}
          name={player.name}
          number={player.number}
          data={player.team}
          image={player.avatarUrl}
          teams={teams}
          link={mainRoutes.PlayerDetailsPath}/>),
    [players, teams])
  return (
    <CartLayout hasSelect={true}
                pageSize={pageSize}
                initialized={initialized}
                itemCount={playerCount}
                currentPage={currentPage}
                onSearchChange={onSearchChange}
                onPageChanged={onPageChanged}
                onSelectPageCountChange={onSelectPageCountChange}
                onSelectChange={onSelectChange}
                addItem={addPlayer}>
      {cartPlayer}
    </CartLayout>
  )
}