import styled from "styled-components"
import {deviceMax} from "../Primitives"

export const DetailsItemsStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  @media screen and ${deviceMax.sm} {
    padding-bottom: 16px;
  }
`

export const HeadBlockDetailsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 21px 24px 32px;
  background: #FFFFFF;
  border-radius: 10px 10px 0 0;
  border: 0.5px solid #9C9C9C;
  font-size: 14px;
  font-weight: bold;
  color: #707070;

  img:first-child {
    margin-right: 20px;
  }

  img {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #E4163A;
  }
  @media screen and ${deviceMax.sm} {
    border-radius: 0;
    border-left: none;
    border-right: none;
  };
`

export const DataLabelDetailsStyles = styled.div<{player?: boolean}>`
  display: flex;
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  transform: rotate(-180deg);

  & > * {
    transform: rotate(-180deg);
    display: flex;
    padding: ${props => !props.player ? '5% 0;' : '5% 0 0 0;'}
  }

  border-radius: 10px 10px 0 0;
  @media screen and ${deviceMax.md} {
    flex-direction: column;
  }
  @media screen and ${deviceMax.sm} {
    border-radius: 0;
  }
`

export const DetailsLabelStyles = styled.div<{player?: boolean}>`
  width: ${props => props.player ? '50%;' : '45%;'};
  justify-content: center;
  align-items: ${props => props.player ? 'flex-end;' : 'center;'};
  margin-left: 1%;
  img{
    max-width: ${props => props.player ? '531px' : '210px'};
    width: ${props => props.player ? '531px' : '210px'};
  }

  @media screen and ${deviceMax.xl} {
    overflow: hidden;
    img{
      width: ${props => props.player ? '' : '150px'};
    }
  };
  @media screen and ${deviceMax.md} {
    width: 100%;
    img{
      width: ${props => props.player && '220px'};
    }
  };
  @media screen and ${deviceMax.sm} {
    img {
      width: ${props => props.player ? '140px' : '90px;'};
      max-height: 125px;
      margin: 30px 0;
    }
  };
`

export const DetailsDataStyles = styled.div<{player?: boolean}>`
  display: flex;
  flex-direction: column;
  color: #FFFFFF;
  width: ${props => props.player ? '50%' : '55%;'};
  a {
    text-decoration: none;
    color: #E4163A;
    font-size: 38px;
  }

  .detailName {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10%;
  }

  .detailsDescriptionValueGlobal {
    font-size: 24px;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and ${deviceMax.xl}{
    .detailName {
      margin-bottom: 5%;
      font-size: 24px;
    }
    a {
      font-size: 26px;
    }
    .detailsDescriptionValueGlobal {
      font-size: 18px;
    }
  };
  @media screen and ${deviceMax.md} {
    width: 100%;
    align-items: center;
    .detailsDescriptionValueGlobal {
      display: flex;
      flex-direction: column;
    }
  };
  @media screen and ${deviceMax.sm} {
    .detailName {
      font-size: 17px;
      padding: 0 0 48px 0;
    }
    a {
      font-size: 19px;
    }
  };
`

export const DetailsDescriptionValueStyles = styled.div`
  margin-bottom: 15%;

  div:last-child {
    padding-top: 8px;
    font-size: 18px;
    font-weight: lighter;
  };
  @media screen and ${deviceMax.xl}{
    div:last-child {
      font-size: 12px;
    };
  };
  @media screen and ${deviceMax.md} {
    display: flex;
    flex-direction: column;
    align-items: center;
  };
  @media screen and ${deviceMax.sm} {
    font-size: 17px;
    margin-bottom: 32px;
    div:last-child {
      font-size: 15px;
    }
  };
`