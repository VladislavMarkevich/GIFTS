import * as React from "react";
import DateTime from "./DateTime";
import {
  RootInfoContainer,
  RootInfoChildContainer,
  DateTimesContainer,
  DisplayNameContainer,
  DescriptionContainer,
  KindaInfoContainer,
  KindaDisplayValueContainer,
  KindaDisplayNameContainer,
  ButtonContainer
} from "./styled";

import { ComponentProps as Props, ComponentSate as State } from "./types";

class RootInfo extends React.Component<Props, State> {
  render() {
    const {
      name = "",
      description = "",
      probability_total = 0,
      startDate = {},
      endDate = {},
      itemsCount = {}
    } = this.props;
    return (
      <RootInfoContainer>
        <RootInfoChildContainer>
          <DisplayNameContainer>{name}</DisplayNameContainer>
        </RootInfoChildContainer>
        <DateTimesContainer>
          <DateTime name="START" dateTime={startDate} />
          <DateTime name="END" dateTime={endDate} />
        </DateTimesContainer>
        <RootInfoChildContainer>
          <DescriptionContainer>{description}</DescriptionContainer>
        </RootInfoChildContainer>
        <RootInfoChildContainer>
          <KindaInfoContainer>
            <KindaDisplayValueContainer>
              {itemsCount}
            </KindaDisplayValueContainer>
            <KindaDisplayNameContainer>ITEMS</KindaDisplayNameContainer>
          </KindaInfoContainer>
          <KindaInfoContainer>
            <KindaDisplayValueContainer>
              {probability_total}
            </KindaDisplayValueContainer>
            <KindaDisplayNameContainer>CHANCETOTAL</KindaDisplayNameContainer>
          </KindaInfoContainer>
        </RootInfoChildContainer>
        <RootInfoChildContainer>
          <ButtonContainer>Explain</ButtonContainer>
        </RootInfoChildContainer>
      </RootInfoContainer>
    );
  }
}

export default RootInfo;
