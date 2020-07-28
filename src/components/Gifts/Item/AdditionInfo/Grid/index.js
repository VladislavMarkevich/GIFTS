import * as React from "react";
import Rows from "./Rows";
import {
  GridContainer,
  GridItemsContainer,
  RowsContainer,
  RowsChildContainer
} from "./styled";

import { ComponentProps as Props, ComponentSate as State } from "./types";

class Grid extends React.Component<Props, State> {
  render() {
    const { items = [] } = this.props;
    return (
      <GridContainer>
        <RowsContainer isHeader>
          <RowsChildContainer>Items</RowsChildContainer>
          <RowsChildContainer>Level</RowsChildContainer>
          <RowsChildContainer>Cost</RowsChildContainer>
          <RowsChildContainer>Chance</RowsChildContainer>
        </RowsContainer>
        <GridItemsContainer>
          {items.map(item => {
            return <Rows key={item.id} {...item} />;
          })}
        </GridItemsContainer>
      </GridContainer>
    );
  }
}

export default Grid;
