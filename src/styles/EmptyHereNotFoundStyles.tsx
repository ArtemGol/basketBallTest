import styled from "styled-components"
import {deviceMax} from "./Primitives"

export const EmptyHereNotFoundStyles = styled.div<{
    team?: boolean
    unFound?: boolean
}>`
  img {
    margin-bottom: 24px;
  }

  .firstSpan {
    font-weight: 600;
    font-size: 36px;
    color: #FF768E;
  }

  .secondSpan {
    font-size: 24px;
    color: #707070;
  }

  text-align: center;
  padding: ${props => props.team ? '5% 4%;' : '5% 12%;'};
  background: #FFFFFF;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  align-items: center;
  justify-content: center;
  background-size: cover;
  @media screen and ${deviceMax.sm} {
    img {
      width: 100%;
    }

    border-radius: 0;
    width: 100%;
    height: ${props => props.unFound ? '90vh' : '70vh'};
    .firstSpan {
      font-size: 17px;
    }

    .secondSpan {
      font-size: 15px;
    }
  }
`