import React, {useEffect, useMemo} from 'react'
import {DetailsItemsStyles} from "../../styles/forDetails/DetailsStyle"
import {WithHeaderSideBarLayout} from "../WithHeaderSideBarLayout"
import {Roster} from "./components/Roster";
import {RosterLayout} from "./components/RosterLayout"
import {HeadBlockDetails} from "./components/HeadBlockDetails"
import {DataLabelDetails} from "./components/DataLabelDetails"
import {useParams} from "react-router"
import {useTeamSelector} from "../../modules/team/teamSlice"
import {getTeamThunkCreator} from "../../modules/team/teamThunk"
import {usePlayerSelector} from "../../modules/player/playerSlice";
import {getPlayersThunkCreator} from "../../modules/player/playerThunk";
import {Preloader} from "../helpers/preloader/Preloader";
import {NotFound} from "../NotFound";
import {useAppDispatch} from "../../core/redux/store";

export const TeamDetails = () => {
  const {teamID}: any = useParams()
  const dispatch: any = useAppDispatch()
  const {players, playerCount} = usePlayerSelector(state => state.player)
  useEffect(() => {
    dispatch(getPlayersThunkCreator({playerName: '', currentPage: 1, pageSize: playerCount}))
    dispatch(getTeamThunkCreator({id: teamID}))
    //eslint-disable-next-line
  }, [])

  const {team, initialized} = useTeamSelector(state => state.team)
  const {name, foundationYear, division, conference, imageUrl, id}: any = team || ''
  const obj = {foundationYear, division, conference}

  const rosterItems = useMemo(() =>
      players.map(player => player.team === id &&
        <Roster key={player.id}
                number={player.number}
                mini={player.avatarUrl}
                rName={player.name}
                rPosition={player.position}
                rHeight={player.height}
                rWeight={player.weight}
                rBirthday={player.birthday}
                rId={player.id}/>),
    [players, id])

  return (
    <WithHeaderSideBarLayout details>
      {!initialized
        ? id
          ? <>
            <DetailsItemsStyles>
              <HeadBlockDetails name={name} id={id}/>
              <DataLabelDetails name={name} obj={obj} image={imageUrl}/>
            </DetailsItemsStyles>
            <RosterLayout>
              {players && players.length > 0
                ? rosterItems
                : ''
              }
            </RosterLayout>
          </>
          : <NotFound/>
        : <Preloader details/>
      }
    </WithHeaderSideBarLayout>
  )
}