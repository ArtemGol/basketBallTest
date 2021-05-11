import React from 'react'
import notFound from '../assets/images/notfound.png'
import styled from "styled-components";
import {deviceMax, theme} from "../assets/constants/primitives";

export const NotFound = () => {
  return (
    <NotFoundEmptyHereStyles unFound>
      <img src={notFound} alt="notFound"/>
      <div className={'title'}>
        Page not found
      </div>
      <div className={'text'}>
        Sorry, we can't find what you're looking for
      </div>
    </NotFoundEmptyHereStyles>
  );
}

export const NotFoundEmptyHereStyles = styled.div<{
    team?: boolean
    unFound?: boolean
}>`
  img {
    margin-bottom: 24px;
  }

  .title {
    font-weight: 600;
    font-size: 36px;
    color: ${theme.lightestRed};
  }

  .text {
    font-size: 24px;
    color: ${theme.grey};
  }

  text-align: center;
  padding: ${props => props.team ? '5% 4%;' : '5% 12%;'};
  background: ${theme.white};
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
    .title {
      font-size: 17px;
    }

    .text {
      font-size: 15px;
    }
  }
`