//@flow
import * as React from "react";
import styled from "styled-components";

import type { ComponentProps as Props, ComponentState as State } from "./types";

const iconColor = `#3e3e3e`;

const IconContainer = styled.div`
  width: 30px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  max-width: 20px;
  grid-template-rows: repeat(auto-fill, 3px);
  max-height: 15px;
  grid-gap: 3px;
`;

const LineContainer = styled.div`
  display: grid;
  grid-template-columns: 3px minmax(0, 1fr);
  max-width: 100%;
  grid-gap: 2px;
`;

const RectangleContainer = styled.div`
  background-color: ${iconColor};
`;

const CircleContainer = styled.div`
  border-radius: 50%;
  background-color: ${iconColor};
`;

class Icon extends React.Component<Props, State> {
  render() {
    return (
      <IconContainer>
        <LineContainer>
          <CircleContainer />
          <RectangleContainer />
        </LineContainer>
        <LineContainer>
          <CircleContainer />
          <RectangleContainer />
        </LineContainer>
        <LineContainer>
          <CircleContainer />
          <RectangleContainer />
        </LineContainer>
      </IconContainer>
    );
  }
}

export default Icon;
