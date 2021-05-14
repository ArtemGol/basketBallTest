import React, {ChangeEvent, FC} from "react";
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
                onSearchChange={onSearchChange}
                onSelectChange={onSelectChange}
                addItem={addItem}
            />
            {!initialized
                ? <CardItemsStyles itemCount={itemCount}>
                    {itemCount > 0
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

const CardItemsStyles = styled.div<{ itemCount: number }>`
  display: ${props => props.itemCount > 0 ? 'grid;' : 'flex;'};
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