//@flow
import * as React from "react";
import RootInfo from "./RootInfo";
import AdditionInfo from "./AdditionInfo";

import { GiftContainer } from "./styled";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class Gift extends React.Component<Props, State> {
  render() {
    const {
      name = "",
      image = "",
      description = "",
      startDate = {},
      endDate = {},
      probability_total = "",
      items = []
    } = this.props;
    const itemsCount = items.length;
    return (
      <GiftContainer>
        <AdditionInfo backgroundImage={image} items={items} />
        <RootInfo
          name={name}
          description={description}
          startDate={startDate}
          endDate={endDate}
          probability_total={probability_total}
          itemsCount={itemsCount}
        />
      </GiftContainer>
    );
  }
}

export default Gift;
