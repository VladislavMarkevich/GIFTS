//@flow
import * as React from "react";
import Icon from "./Icon";
import { MenuContainer, IconContainer } from "./styled";

import type { ComponentProps as Props, ComponentState as State } from "./types";

class Menu extends React.Component<Props, State> {
  render() {
    return (
      <MenuContainer>
        <IconContainer>
          <Icon />{" "}
        </IconContainer>
      </MenuContainer>
    );
  }
}

export default Menu;
