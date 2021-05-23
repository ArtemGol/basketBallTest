import preloader from "../../../assets/icon/preloader.svg"
import React from "react"
import styled from "styled-components"
import {deviceMax} from "../../../assets/constants/primitives"

interface IProps {
  details?: boolean
}

export const Preloader = ({details}: IProps) => (
  <PreloaderStyles details={details}>
    <img src={preloader} alt='preloader'/>
  </PreloaderStyles>
)

const PreloaderStyles = styled.div<{ details?: boolean }>`
  width: 100%;
  height: ${props => props.details ? '400px' : '650px'};
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
  }

  @media screen and ${deviceMax.sm} {
    height: 90vh;
    img {
      width: 100px;
    }
  }
`



