import React, {FC} from 'react'
import styled from "styled-components"
import {deviceMax, theme} from "../../assets/constants/primitives"


export const RosterLayout: FC = ({children}) => {
  return (
    <RosterListStyles>
      <RosterHeadStyles>
        Roster
      </RosterHeadStyles>
      <RosterStyles units>
        <span>#</span>
        <span>Player</span>
        <RosterCharacteristics>
          <span>Height</span>
          <span>Weight</span>
          <span>Age</span>
        </RosterCharacteristics>
      </RosterStyles>
      <main>
        {children}
      </main>
    </RosterListStyles>
  )
}

const RosterListStyles = styled.div`
  div:last-child {
    border-radius: 0 0 10px 10px;
  }
;
  @media screen and ${deviceMax.sm} {
    div:last-child {
      border-radius: 0;
    }

    div {
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
  };
`

const RosterHeadStyles = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.grey};
  padding-left: 32px;
  height: 54px;
  border: 0.5px solid ${theme.lightGrey};
  border-radius: 10px 10px 0 0;
`

export const RosterStyles = styled.div<{ units?: boolean }>`
  color: ${theme.grey};
  height: ${props => props.units ? '40px;' : '65px;'};
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 10fr 7fr;
  border: 0.5px solid ${theme.lightGrey};
  border-top: none;
  padding: ${props => props.units ? '0 32px;' : '0 40px 0 32px;'};

  @media screen and ${deviceMax.sm} {
    grid-template-columns: 1fr 6fr;
    img {
      padding-right: 10px;
    }
  }
`

export const RosterNamePhoto = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;

  img {
    border-radius: 100px;
  }

  div {
    div:first-child {
      padding-bottom: 8px;
    }

    div:last-child {
      font-size: 12px;
      color: ${theme.lightGrey};
    }
  }
`

export const RosterCharacteristics = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and ${deviceMax.sm} {
    display: none;
  }
`