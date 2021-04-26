import styled from "styled-components"
import {deviceMax} from "../Primitives"

export const RosterListStyles = styled.div`
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

export const RosterHeadStyles = styled.div`
  display: flex;
  align-items: center;
  color: #707070;
  padding-left: 32px;
  height: 54px;
  border: 0.5px solid #9C9C9C;
  border-radius: 10px 10px 0 0;
`

export const RosterStyles = styled.div<{units?: boolean}>`
  color: #707070;
  height: ${props => props.units ? '40px;' : '65px;'}
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 10fr 7fr;
  border: 0.5px solid #9C9C9C;
  border-top: none;
  padding: ${props => props.units ? '0 32px;' : '0 40px 0 32px;'}
  .namePhoto{
    img{
      border-radius: 100px;
    }
    display: grid;
    grid-template-columns: 1fr 7fr;
    div{
      div:first-child{
        padding-bottom: 8px;
      }
      div:last-child{
        font-size: 12px;
        color: #9C9C9C;
      }
      }
    }
  }
  .characteristics{
    display: flex;
    justify-content: space-between;
  };
  @media screen and ${deviceMax.sm}{
    grid-template-columns: 1fr 6fr;
    img{
      padding-right: 10px;
    }
    .characteristics{
      display: none;
    }
  }
`