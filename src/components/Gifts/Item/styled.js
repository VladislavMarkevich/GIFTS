//@flow
import styled from "styled-components";

export const GiftContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-template-rows: minmax(0, 1fr) 175px;
  max-height: 100%;
  overflow: hidden;

  border-radius: 5px;
  background-color: white;
`;
