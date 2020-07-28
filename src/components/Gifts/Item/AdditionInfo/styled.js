//@flow
import styled from "styled-components";

export const AdditionInfoContainer = styled.div``;

export const ImageContainer = styled.img.attrs({
  src:
    "https://www.stickees.com/files/love/gifts/458-yellow-and-red-gift-box.png",
  alt: ""
})`
  width: 100%;
  height: 100%;
  background: ${props => {
    const { backgroundImage = "" } = props;
    return `url("data:image/svg+xml;base64, ${backgroundImage}")`;
  }};
`;
