import React, {FC} from 'react'
import {RosterHeadStyles, RosterListStyles, RosterStyles} from "../../../styles/forDetails/RosterStyles"


export const RosterLayout: FC = ({children}) => {
    return (
        <RosterListStyles>
            <RosterHeadStyles>
                Roster
            </RosterHeadStyles>
            <RosterStyles units>
                <span>#</span>
                <span>Player</span>
                <div className={'characteristics'}>
                    <span>Height</span>
                    <span>Weight</span>
                    <span>Age</span>
                </div>
            </RosterStyles>
            <main>
                {children}
            </main>
        </RosterListStyles>
    )
}