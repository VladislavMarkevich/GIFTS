//@flow
import styled from "styled-components";

export const DateTimeContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-template-rows: 19px 13px;
`;

export const DisplayValueContainer = styled.div`
  line-height: 1;
  text-align: center;
  color: #48c45b;
  font-weight: bold;
  font-size: 19px;
`;

export const DisplayNameContainer = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  font-family: Georgia;
`;
