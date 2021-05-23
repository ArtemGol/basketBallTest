import React from 'react'
import {NavLink} from "react-router-dom"
import editing from "../../assets/icon/create.png"
import deleting from "../../assets/icon/delete.png"
import {mainRoutes} from "../../pages/routes";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";

interface IProps {
  player?: boolean
  name: string
  goToUpdateItem: () => void
  deleteItem: () => void
}

export const HeadBlockDetails = ({player, name, goToUpdateItem, deleteItem}: IProps) => (
  <HeadBlockDetailsStyles>
    <div>
      <NavLink to={player ? mainRoutes.CardPlayersPath : mainRoutes.CardTeamsPath}>
        {player ? 'Players' : 'Teams'}
      </NavLink>&ensp;/&ensp;
      <NavLink to={'##'}>
        {name}
      </NavLink>
    </div>
    <DetailIcons>
      <img src={editing} alt="edit" onClick={goToUpdateItem}/>
      <img src={deleting} alt="delete" onClick={deleteItem}/>
    </DetailIcons>
  </HeadBlockDetailsStyles>
)

const HeadBlockDetailsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 21px 24px 32px;
  background: ${theme.white};
  border-radius: 10px 10px 0 0;
  border: 0.5px solid ${theme.lightGrey};
  font-size: 14px;
  font-weight: bold;
  color: ${theme.grey};

  img:first-child {
    margin-right: 20px;
  }

  img {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${theme.red};
  }

  @media screen and ${deviceMax.sm} {
    border-radius: 0;
    border-left: none;
    border-right: none;

    img:first-child {
      margin-right: 5px;
    }
  };
`

const DetailIcons = styled.div`
  @media screen and ${deviceMax.sm} {
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }
`