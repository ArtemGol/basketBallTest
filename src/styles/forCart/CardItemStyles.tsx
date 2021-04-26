import styled from "styled-components"
import {deviceMax} from "../Primitives"

export const CardItemStyles = styled.div`
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px;
`

export const CardItemImageStyles = styled.div<{team?: boolean}>`
  display: flex;
  justify-content: center;
  ${props => props.team ? 'align-items: center;' : ''} ;
  padding: ${props => props.team ? '18% 0;' : '18% 0 0;'};
  img{
    max-width: ${props => props.team ? '150px' : '250px;'};
  }
  @media screen and (max-width: 1190px) {
  img {
    width: 150px;
  };
};
  @media screen and ${deviceMax.esm} {
        img {
          width: 80px;
        };
    };
`

export const CardItemDataStyles = styled.div`
  height: 100px;
  background: #303030;
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  div {
    padding: 0 5%;
  };

  .firstBlock {
    margin-bottom: 12px;
    font-size: 18px;
    color: #FFFFFF;
    a {
      text-decoration: none;
      color: #E4163A;
      font-size: 20px;
    }
  };

  .secondBlock {
    font-size: 14px;
    color: #9C9C9C;
  };
  @media screen and ${deviceMax.esm} {
    .firstBlock{
      font-size: 15px;
      a {
        font-size: 18px;
      }
    };
    .secondBlock{
      font-size: 13px;
    };
  };
`