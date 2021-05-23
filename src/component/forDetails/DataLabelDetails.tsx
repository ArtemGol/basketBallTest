import React, {useMemo} from 'react'
import {NavLink} from "react-router-dom"
import {DescriptionValueDetails} from "./DescriptionValueDetails"
import styled from "styled-components";
import {deviceMax, theme} from "../../assets/constants/primitives"

interface IProps {
  player?: boolean
  name: string
  number?: number
  obj: any
  image: string
}

export const DataLabelDetails = ({player, name, number, obj, image}: IProps) => {
  const descriptionValues = useMemo(() =>
      Object.keys(obj).map(key =>
        <DescriptionValueDetails param={key} key={key} value={obj[key]}/>),
    [obj])
  return (
    <DataLabelDetailsStyles player={player}>
      <DetailsDataStyles player={player}>
        <DetailsName>
          {name}
          {number &&
          <NavLink to={'##'}>&ensp;#{number}</NavLink>
          }
        </DetailsName>
        <DetailsDescriptionValueGlobal>
          {descriptionValues}
        </DetailsDescriptionValueGlobal>
      </DetailsDataStyles>
      <DetailsLabelStyles player={player}>
        <img src={`http://dev.trainee.dex-it.ru${image}`} alt='detailsLabel'/>
      </DetailsLabelStyles>
    </DataLabelDetailsStyles>
  )
}

const DataLabelDetailsStyles = styled.div<{ player?: boolean }>`
  display: flex;
  background: linear-gradient(276.45deg, ${theme.grey} 0%, ${theme.darkGrey1} 100.28%);
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

const DetailsLabelStyles = styled.div<{ player?: boolean }>`
  width: ${props => props.player ? '50%;' : '45%;'};
  justify-content: center;
  align-items: ${props => props.player ? 'flex-end;' : 'center;'};
  margin-left: 1%;

  img {
    max-width: ${props => props.player ? '531px' : '210px'};
    width: ${props => props.player ? '531px' : '210px'};
  }

  @media screen and ${deviceMax.xl} {
    overflow: hidden;
    img {
      width: ${props => props.player ? '' : '150px'};
    }
  };
  @media screen and ${deviceMax.md} {
    width: 100%;
    img {
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

const DetailsDataStyles = styled.div<{ player?: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${theme.white};
  width: ${props => props.player ? '50%' : '55%;'};

  a {
    text-decoration: none;
    color: ${theme.red};
    font-size: 38px;
  }

  @media screen and ${deviceMax.xl} {
    a {
      font-size: 26px;
    }
  };
  @media screen and ${deviceMax.md} {
    width: 100%;
    align-items: center;
  };
  @media screen and ${deviceMax.sm} {
    a {
      font-size: 19px;
    }
  };
`

const DetailsName = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10%;
  @media screen and ${deviceMax.xl} {
    margin-bottom: 5%;
    font-size: 24px;
  };
  @media screen and ${deviceMax.sm} {
    font-size: 17px;
    padding: 0 0 48px 0;
  };
`

const DetailsDescriptionValueGlobal = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and ${deviceMax.xl} {
    font-size: 18px;
  };
  @media screen and ${deviceMax.md} {
    display: flex;
    flex-direction: column;
  };
`