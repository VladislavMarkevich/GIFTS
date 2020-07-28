import * as React from "react";
import { RowsContainer, RowsChildContainer } from "../styled";

import { ComponentProps as Props, ComponentSate as State } from "./types";

class Rows extends React.PureComponent<Props, State> {
  render() {
    const { name = "", level = 0, change = 0, cost = 0 } = this.props;
    return (
      <RowsContainer>
        <RowsChildContainer>{name}</RowsChildContainer>
        <RowsChildContainer>{level}</RowsChildContainer>
        <RowsChildContainer>{change}</RowsChildContainer>
        <RowsChildContainer>{cost}</RowsChildContainer>
      </RowsContainer>
    );
  }
}

export default Rows;
