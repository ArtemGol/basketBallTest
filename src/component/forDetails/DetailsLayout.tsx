import React, {FC, useMemo} from "react";
import {IPlayer} from "../../modules/player/playerTypes";
import {Roster} from "./Roster";
import {WithHeaderSideBarLayout} from "../WithHeaderSideBarLayout";
import {RosterLayout} from "./RosterLayout";
import {NotFound} from "../NotFound";
import {Preloader} from "../common/preloader/Preloader";
import styled from "styled-components";
import {deviceMax} from "../../assets/constants/primitives";

interface IProps {
  player: boolean
  id: number
  players?: IPlayer[]
  initialized: boolean
}

export const DetailsLayout: FC<IProps> = ({
                                            player,
                                            id,
                                            players,
                                            initialized,
                                            children
                                          }) => {
  const rosterItems = useMemo(() =>
      players?.map(player => player.team === id &&
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
              {children}
            </DetailsItemsStyles>
            {!player &&
            <RosterLayout>
              {players && players.length > 0
                ? rosterItems
                : ''
              }
            </RosterLayout>
            }
          </>
          : <NotFound/>
        : <Preloader details/>
      }
    </WithHeaderSideBarLayout>
  )
}

export const DetailsItemsStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  @media screen and ${deviceMax.sm} {
    padding-bottom: 16px;
  }
`