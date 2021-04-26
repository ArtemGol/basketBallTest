import React, {FC} from 'react'
import {NavLink} from "react-router-dom"
import {HeadBlockAddItemStyles} from "../../../styles/forAdd/AddItemStyles"
import {CardPlayersPath, CardTeamsPath} from "../../routes";
import {PlayerInterFace} from "../../../modules/player/playerTypes";
import {FormTeamInterFace} from "../../../modules/team/teamThunk";

export const HeadBlockAddUpdateItem: FC<{
    player?: boolean,
    updateItem: PlayerInterFace | FormTeamInterFace | null
}> = ({
          player,
          updateItem
      }) => {
    return (
        <HeadBlockAddItemStyles>
            <div className={'headDetailsPath'}>
                <NavLink to={player ? CardPlayersPath : CardTeamsPath}>
                    {player ? 'Players' : 'Teams'}
                </NavLink>&ensp;/&ensp;
                <NavLink to={'##'}>
                    {player
                        ? updateItem
                            ? 'Update player'
                            : 'Add new player'
                        : updateItem
                            ? 'Update team'
                            : 'Add new team'}
                </NavLink>
            </div>
        </HeadBlockAddItemStyles>
    )
}