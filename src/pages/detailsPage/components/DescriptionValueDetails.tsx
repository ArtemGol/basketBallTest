import React, {FC} from 'react'
import {DetailsDescriptionValueStyles} from "../../../styles/forDetails/DetailsStyle"

//only one of props need to hand over

export const DescriptionValueDetails: FC<{param: string, value: string}> = ({param, value}) => {
  return (
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
}