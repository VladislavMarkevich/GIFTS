//@flow
import styled from "styled-components";

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 45px;
  border-right: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
  border-bottom-right-radius: 5px;
  background-color: #f9f9f8;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
