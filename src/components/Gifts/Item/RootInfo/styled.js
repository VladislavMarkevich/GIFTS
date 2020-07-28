//@flow
import styled from "styled-components";

export const RootInfoContainer = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 100%;
  grid-template-rows: 20px 32px 28px 32px 26px;
  max-height: 100%;
  grid-gap: 5px;
  padding: 8px;
`;

export const RootInfoChildContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const DateTimesContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  max-width: 100%;
  grid-template-rows: minmax(0, 1fr);
  max-height: 100%;
`;

export const DisplayNameContainer = styled.div`
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: calc(100% - 100px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  font-size: 16px;
  font-family: Geneva, Arial, Helvetica, sans-serif;
`;

export const DescriptionContainer = styled.div`
  width: calc(100% - 10px);
  height: 100%;
  padding: 0 5px 0 5px;
  overflow: hidden;
  color: #bbbbbb;
  font-size: 12px;
  font-family: Geneva, Arial, Helvetica, sans-serif;
`;

export const KindaInfoContainer = styled.div`
  display: inline-block;
  width: 50%;
  height: 100%;
`;

export const KindaDisplayValueContainer = styled.div`
  line-height: 1;
  text-align: center;
  color: #7ebbe6;
  font-weight: bold;
  font-size: 19px;
`;

export const KindaDisplayNameContainer = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  font-family: Georgia;
`;

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 26px;
  border: 1px solid #e7e7e8;
  border-radius: 5px;

  color: #929292;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: #dff2e5;
  }
`;
