import React, {FC} from "react";
import {
  CardItemDataStyles,
  CardItemImageStyles,
  CardItemStyles,
} from "../../../styles/forCart/CardItemStyles";
import { NavLink } from "react-router-dom";
import { useTeamSelector } from "../../../modules/team/teamSlice";
import {MainRoutes} from "../../routes";

//CartItemPlayer: null, CartItemTeam: team

export const CartItemComponent: FC<{
    team?: boolean
    name: string
    data: string | number
    image: string
    number?: number
    id: number
}> = ({ team, name, data, image, number, id }) => {
  const playerTeam = useTeamSelector(
    (state) =>
      !team &&
      state.team?.teams.find((team) => team.id === data)
  );
  return (
    <CardItemStyles>
      <NavLink to={team ? MainRoutes.TeamDetailsPath.link + id : MainRoutes.PlayerDetailsPath.link + id}>
        <CardItemImageStyles team={team}>
          <img src={image} alt="label" />
        </CardItemImageStyles>
      </NavLink>
      <CardItemDataStyles>
        <div className={"firstBlock"}>
          {name}
          <NavLink to={MainRoutes.PlayerDetailsPath.link + id}>{!team && ` #${number}`}</NavLink>
        </div>
        <div className={"secondBlock"}>
          {team ? `Year of foundation: ${data}` : playerTeam && playerTeam.name}
        </div>
      </CardItemDataStyles>
    </CardItemStyles>
  );
};
