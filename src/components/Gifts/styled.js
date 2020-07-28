//@flow
import styled from "styled-components";

export const GiftsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 290px);
  grid-auto-rows: 405px;
  grid-gap: 10px 10px;

  width: calc(100% - 20px);
  height: calc(100% - 20px);
  margin: 10px 5px 10px 5px;
  padding: 0 5px 0 5px;

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
