import styled from "styled-components"
import {deviceMax} from "../Primitives"

export const SearchButtonCardStyles = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 24px;
  .searchSelect{
    min-width: 60%;
    display: flex;
    justify-content: space-between;
    grid-gap: 24px;
  }
  margin-bottom: 32px;
  @media screen and ${deviceMax.md} {
    flex-direction: column;
    grid-gap: 16px;
    .searchSelect{
      display: flex;
      flex-direction: column;
      grid-gap: 16px;
    }
    margin-bottom: 16px;
  }
`

export const CardItemsStyles = styled.div<{items: Array<any>}>`
  display: ${props => props.items && props.items.length > 0 ? 'grid;' : 'flex;'};
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin-bottom: 32px;
  @media screen and ${deviceMax.sm} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    margin-bottom: 16px;
  }
`