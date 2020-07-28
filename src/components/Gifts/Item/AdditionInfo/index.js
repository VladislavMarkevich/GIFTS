import * as React from "react";
import Grid from "./Grid";
import { AdditionInfoContainer, ImageContainer } from "./styled";

import { ComponentProps as Props, ComponentSate as State } from "./types";

class AdditionInfo extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  hadleClick = () => {
    const { isOpen = false } = this.state;
    this.setState({ isOpen: !isOpen });
  };

  render() {
    const { backgroundImage = "", items = [] } = this.props;
    const { isOpen = false } = this.state;

    return (
      <AdditionInfoContainer>
        {isOpen ? (
          <Grid items={items} />
        ) : (
          <ImageContainer
            onClick={this.hadleClick}
            backgroundImage={backgroundImage}
          />
        )}
      </AdditionInfoContainer>
    );
  }
}

export default AdditionInfo;
