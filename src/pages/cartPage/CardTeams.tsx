import React, {useEffect, useMemo} from "react";
import {CartItemComponent} from "./components/CartItemComponent";
import {WithHeaderSideBarLayout} from "../WithHeaderSideBarLayout";
import {SearchButtonCard} from "./components/SearchButtonCard";
import {CustomPagination} from "../helpers/pagination/CustomPagination";
import {CardItemsStyles} from "../../styles/forCart/CardItemsMurkup";
import {setTeamSearch, useTeamSelector} from "../../modules/team/teamSlice";
import {getTeamsThunkCreator} from "../../modules/team/teamThunk";
import {useQuery} from "../../hooks/hooks";
import {useHistory} from "react-router";
import {EmptyHere} from "./components/EmptyHere";
import {Preloader} from "../helpers/preloader/Preloader";
import {useAppDispatch} from "../../core/redux/store";

export const CardTeams = () => {
  const dispatch: any = useAppDispatch();
  const {
    teams,
    teamCount,
    pageSize,
    search,
    currentPage,
    team,
    initialized
  } = useTeamSelector(state => state.team);
  const query: URLSearchParams = useQuery();
  const history: any = useHistory();


  useEffect(() => {
    const searchText = query.get("searchText");
    const FirstLetter = searchText?.slice(0, 1).toUpperCase() || ''
    const RestLetters = searchText?.slice(1, searchText.length) || ''
    searchText && dispatch(setTeamSearch(FirstLetter + RestLetters))
      dispatch(
      getTeamsThunkCreator({
        teamName: FirstLetter + RestLetters || "",
        currentPage: Number(query.get("page")) || 1,
        pageSize: 6,
      })
    );
    //eslint-disable-next-line
  }, []);

  const cartTeam = useMemo(() =>
    teams.map(
      team => <CartItemComponent
        team
        key={team.id}
        id={team.id}
        name={team.name}
        data={team.foundationYear}
        image={team.imageUrl}
      />),
      [teams])

  return (
    <WithHeaderSideBarLayout>
      <SearchButtonCard
        pageSize={pageSize}
        query={query}
        addingItem={team}
      />
      {!initialized
        ? <CardItemsStyles items={teams}>
          {teams && teams.length > 0
            ? cartTeam
            : <EmptyHere team/>
          }
        </CardItemsStyles>
        : <Preloader/>
      }
      <CustomPagination
        team
        pageSize={pageSize}
        itemsCount={teamCount}
        query={query}
        history={history}
        search={search}
        currentPage={currentPage}
      />
    </WithHeaderSideBarLayout>
  );
};
