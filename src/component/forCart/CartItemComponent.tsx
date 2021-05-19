import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives";
import {ITeam} from "../../modules/team/teamTypes";

//CartItemPlayer: null, CartItemTeam: team

interface IProps {
    teams?: ITeam[]
    team?: boolean
    name: string
    data: string | number
    image: string
    number?: number
    id: number
    link: string
}

export const CartItemComponent = ({
                                      team,
                                      name,
                                      data,
                                      image,
                                      number,
                                      id,
                                      teams,
                                      link
                                  }: IProps) => {
    const playerTeam = !team && teams?.find((team) => team.id === data)

    return (
        <CardItemStyles>
            <NavLink to={link + id}>
                <CardItemImageStyles team={team}>
                    <img src={`http://dev.trainee.dex-it.ru${image}`} alt="label"/>
                </CardItemImageStyles>
            </NavLink>
            <CardItemDataStyles>
                <NameBlock>
                    {name}
                    <NavLink to={link + id}>{!team && ` #${number}`}</NavLink>
                </NameBlock>
                <DataBlock>
                    {team ? `Year of foundation: ${data}` : playerTeam && playerTeam.name}
                </DataBlock>
            </CardItemDataStyles>
        </CardItemStyles>
    );
}

const CardItemStyles = styled.div`
  background: linear-gradient(121.57deg, ${theme.grey} 1.62%, ${theme.darkGrey1} 81.02%);
  border-radius: 4px;
`

const NameBlock = styled.div`
  margin-bottom: 12px;
  font-size: 18px;
  color: ${theme.white};

  a {
    text-decoration: none;
    color: ${theme.red};
    font-size: 20px;
  }

  @media screen and ${deviceMax.esm} {
    font-size: 15px;
    a {
      font-size: 18px;
    }
  }
`

const DataBlock = styled.div`
  font-size: 14px;
  color: ${theme.lightGrey};
  @media screen and ${deviceMax.esm} {
    font-size: 13px;
  }
`

const CardItemImageStyles = styled.div<{ team?: boolean }>`
  display: flex;
  justify-content: center;
  ${props => props.team ? 'align-items: center;' : ''} ;
  padding: ${props => props.team ? '18% 0;' : '18% 0 0;'};

  img {
    max-width: ${props => props.team ? '150px' : '250px;'};
  }

  @media screen and (max-width: 1190px) {
    img {
      width: 150px;
    }
  }
  @media screen and ${deviceMax.esm} {
    img {
      width: 80px;
    }
  }
`
const CardItemDataStyles = styled.div`
  height: 100px;
  background: ${theme.darkGrey};
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  div {
    padding: 0 5%;
  }
`
