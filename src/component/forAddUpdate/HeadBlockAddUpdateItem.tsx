import React from 'react'
import {NavLink} from "react-router-dom"
import {mainRoutes} from "../../pages/routes";
import {IPlayer} from "../../modules/player/playerTypes";
import styled from "styled-components";
import {theme} from "../../assets/constants/primitives";
import {ITeam} from "../../modules/team/teamTypes";

interface IProps {
    player?: boolean,
    updateItem: IPlayer | ITeam | null
}

export const HeadBlockAddUpdateItem = ({player, updateItem}: IProps) => (
        <HeadBlockAddItemStyles>
            <div className={'headDetailsPath'}>
                <NavLink to={player ? mainRoutes.CardPlayersPath : mainRoutes.CardTeamsPath}>
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

const HeadBlockAddItemStyles = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 32px;
  background: ${theme.white};
  border-radius: 10px 10px 0 0;
  font-size: 14px;
  font-weight: bold;
  color: ${theme.grey};
  a {
    text-decoration: none;
    color: ${theme.red};
  }
`;