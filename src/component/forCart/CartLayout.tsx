import React, {ChangeEvent, FC} from "react";
import {IPlayer} from "../../modules/player/playerTypes";
import {ITeam} from "../../modules/team/teamTypes";
import {WithHeaderSideBarLayout} from "../WithHeaderSideBarLayout";
import {SearchButtonCart} from "./SearchButtonCart";
import {EmptyHere} from "./EmptyHere";
import {Preloader} from "../common/preloader/Preloader";
import {CustomPagination} from "../common/pagination/CustomPagination";
import styled from "styled-components";
import {deviceMax} from "../../assets/constants/primitives";

interface IProps {
    hasSelect: boolean
    pageSize: number
    query: URLSearchParams
    teamsOptions?: { value: number, label: string }[]
    items: IPlayer[] | ITeam[]
    initialized: boolean
    itemCount: number
    currentPage: number
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSelectChange?: (values: any) => void
    onPageChanged: (selected: any) => void
    onSelectPageCountChange: (e: any) => void
    addItem: () => void
}

export const CartLayout: FC<IProps> = ({
              hasSelect,
              pageSize,
              query,
              teamsOptions,
              items,
              initialized,
              children,
              itemCount,
              currentPage,
              onSearchChange,
              onSelectChange,
              onPageChanged,
              onSelectPageCountChange, addItem
      }) => (
        <WithHeaderSideBarLayout>
            <SearchButtonCart
                hasSelect={hasSelect}
                query={query}
                options={teamsOptions}
                onSearchChange={onSearchChange}
                onSelectChange={onSelectChange}
                addItem={addItem}
            />
            {!initialized
                ? <CardItemsStyles items={items}>
                    {items && items.length > 0
                        ? children
                        : <EmptyHere team={!hasSelect}/>
                    }
                </CardItemsStyles>
                : <Preloader/>
            }
            <CustomPagination
                pageSize={pageSize}
                itemsCount={itemCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                onSelectPageCountChange={onSelectPageCountChange}
            />
        </WithHeaderSideBarLayout>
    )

const CardItemsStyles = styled.div<{ items: Array<any> }>`
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