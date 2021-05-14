import React, {ChangeEvent, useCallback, useEffect, useMemo} from "react";
import {CartItemComponent} from "../../component/forCart/CartItemComponent";
import {setTeamSearch, setTeamToAdd, useTeamSelector} from "../../modules/team/teamSlice";
import {getTeamsThunkCreator} from "../../modules/team/teamThunk";
import {useQuery} from "../../hooks/hooks";
import {useHistory} from "react-router";
import {urlPagination, urlSearch} from "../../utils/urlGolobalFunctions";
import {CartLayout} from "../../component/forCart/CartLayout";
import {mainRoutes} from "../routes";
import {useDispatch} from "react-redux";

export const CardTeams = () => {
    const dispatch = useDispatch();
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
        searchText && dispatch(setTeamSearch(searchText))
        dispatch(
            getTeamsThunkCreator({
                teamName: searchText || "",
                currentPage: Number(query.get("page")) || 1,
                pageSize: 6,
            })
        );
        //eslint-disable-next-line
    }, []);

    const onSearchChange = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        query.delete('page')
        dispatch(setTeamSearch(e.target.value))
        dispatch(getTeamsThunkCreator({
            teamName: e.target.value,
            currentPage: 1,
            pageSize
        }))
        urlSearch(query, history, e.target.value)
    }, [dispatch, history, pageSize, query])

    const onPageChanged = useCallback(({selected}: any) => {
            dispatch(getTeamsThunkCreator({teamName: search || '', currentPage: selected + 1, pageSize}))
            urlPagination(query, selected, history)
        }, [dispatch, history, pageSize, query, search]
    )

    const onSelectPageCountChange = useCallback((e: any) => {
        dispatch(getTeamsThunkCreator({teamName: search || '', currentPage: 1, pageSize: e.value}))
        if (e.value !== pageSize) {
            query.delete('page')
            history.push(`?${query.toString()}`)
        }
    }, [dispatch, history, pageSize, query, search])

    const addTeam = () => {
        history.push(mainRoutes.AddUpdateTeamPath)
        team && dispatch(setTeamToAdd())
    }

    const cartTeam = useMemo(() =>
            teams.map(
                team => <CartItemComponent
                    team
                    key={team.id}
                    id={team.id}
                    name={team.name}
                    data={team.foundationYear}
                    image={team.imageUrl}
                    link={mainRoutes.TeamDetailsPath}
                />),
        [teams])

    return (
        <CartLayout hasSelect={false}
                    pageSize={pageSize}
                    initialized={initialized}
                    itemCount={teamCount}
                    currentPage={currentPage}
                    onSearchChange={onSearchChange}
                    onPageChanged={onPageChanged}
                    onSelectPageCountChange={onSelectPageCountChange}
                    addItem={addTeam}>
            {cartTeam}
        </CartLayout>
    );
};
