import * as React from "react";
import {
  DateTimeContainer,
  DisplayValueContainer,
  DisplayNameContainer
} from "./styled";

import { ComponentProps as Props, ComponentSate as State } from "./types";

class DateTime extends React.PureComponent<Props, State> {
  getDisplayValue = () => {
    const { dateTime } = this.props;
    const day = ("0" + dateTime.getDate()).slice(-2);
    const month = ("0" + (dateTime.getMonth() + 1)).slice(-2);
    const year = dateTime.getFullYear();
    return `${day}-${month}-${year}`;
  };

  render() {
    const { name = "" } = this.props;

    const displayValue = this.getDisplayValue();
    return (
      <DateTimeContainer>
        <DisplayValueContainer>{displayValue}</DisplayValueContainer>
        <DisplayNameContainer>{name}</DisplayNameContainer>
      </DateTimeContainer>
    );
  }
}

export default DateTime;
