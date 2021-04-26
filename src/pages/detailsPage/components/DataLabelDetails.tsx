import React, {FC, useMemo} from 'react'
import {DataLabelDetailsStyles, DetailsDataStyles, DetailsLabelStyles
} from "../../../styles/forDetails/DetailsStyle"
import {NavLink} from "react-router-dom"
import {DescriptionValueDetails} from "./DescriptionValueDetails"

export const DataLabelDetails: FC<{
    player?: boolean
    name: string
    number?: number
    obj: any
    image: string}> = ({player, name, number, obj, image}) => {
  const descriptionValues = useMemo(() =>
      Object.keys(obj).map(key =>
        <DescriptionValueDetails param={key} key={key} value={obj[key]}/>),
      [obj])
    return (
        <DataLabelDetailsStyles player={player}>
            <DetailsDataStyles player={player}>
                <div className={'detailName'}>
                    {name}
                    {number &&
                        <NavLink to={'##'}>&ensp;#{number}</NavLink>
                    }
                </div>
                <div className={'detailsDescriptionValueGlobal'}>
                    {descriptionValues}
                </div>
            </DetailsDataStyles>
            <DetailsLabelStyles player={player}>
                <img src={image} alt='detailsLabel'/>
            </DetailsLabelStyles>
        </DataLabelDetailsStyles>
    )
}