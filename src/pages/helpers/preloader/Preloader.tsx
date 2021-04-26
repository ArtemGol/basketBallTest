import preloader from "../../../assets/icon/Preloader.svg";
import React, {FC} from "react";
import styled from "styled-components"
import {deviceMax} from "../../../styles/Primitives";

export const Preloader: FC<{details?: boolean}> = ({details}) => {
  return (
    <PreloaderStyles details={details}>
      <img src={preloader} alt='preloader'/>
    </PreloaderStyles>
  )
}

const PreloaderStyles = styled.div<{details?: boolean}>`
  width: 100%;
  height: ${props => props.details ? '400px' : '650px'};
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 150px;
  }
  @media screen and ${deviceMax.sm}{
    height: 90vh;
    img{
      width: 100px;
    }
  }
`



