//@flow
import styled from "styled-components";

export const GridContainer = styled.div`
  box-sizing: border-box;
  display:grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-template-rows: 27px minmax(0, 1fr);
  max-heigth: 100%;
  padding: 8px;
  width: 100%
  height: 100%;
`;

export const GridItemsContainer = styled.div`

  width: 100%
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cacaca;
  }
`;

//NOTE: common

export const RowsContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 27px 22px 35px;
  max-width: 100%;
  grid-template-rows: minmax(0, 1fr);
  max-height: 100%;
  grid-gap: 10px;

  ${props => {
    const { isHeader = false } = props;
    return isHeader
      ? ` width: calc(100% - 2px);
          font-size: 11px; 
          font-weight: bold;`
      : `font-size: 12px;`;
  }}

  padding: 7px;
  border-bottom: 1px solid #cacaca;
`;

export const RowsChildContainer = styled.div``;
