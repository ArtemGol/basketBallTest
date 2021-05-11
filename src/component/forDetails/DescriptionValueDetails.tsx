import React from 'react'
import styled from "styled-components"
import {deviceMax} from "../../assets/constants/primitives"

interface IProps {
    param: string
    value: string
}

//only one of props need to hand over

export const DescriptionValueDetails = ({param, value}: IProps) => (
    <DetailsDescriptionValueStyles>
      <div>
        {
          param === 'foundationYear'
            ? 'Year of Foundation'
            : ''
            ||
            param === 'division'
            ? 'Division'
            : '' ||
            param === 'conference'
              ? 'Conference'
              : ''
              ||
              param === 'position'
                ? 'Position'
                : ''
                ||
                param === 'team'
                  ? 'Team'
                  : ''
                  ||
                  param === 'height'
                    ? 'Height'
                    : ''
                    ||
                    param === 'weight'
                      ? 'Weight'
                      : ''
                      ||
                      param === 'age'
                        ? 'Age'
                        : ''
        }
      </div>
      <div>
        {value}&ensp;
        {param === 'height'
          ? 'cm'
          : '' ||
          param === 'weight'
            ? 'kg'
            : ''}
      </div>
    </DetailsDescriptionValueStyles>
  )

const DetailsDescriptionValueStyles = styled.div`
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