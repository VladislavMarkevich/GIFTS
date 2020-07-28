//@flow
import * as React from "react";
import Gift from "./Item";
import { GiftsContainer } from "./styled";
import type { ComponentProps as Props, ComponentState as State } from "./types";

class Gifts extends React.Component<Props, State> {
  render() {
    const { items = [] } = this.props;
    return (
      <GiftsContainer>
        {items.map(gift => {
          return <Gift key={gift.id} {...gift} />;
        })}
      </GiftsContainer>
    );
  }
}

export default Gifts;
