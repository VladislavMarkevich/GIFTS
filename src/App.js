//@flow
import * as React from "react";
import { getStartupData } from "kernel/getStartupData";
import Gifts from "components/Gifts";
import Menu from "components/Menu";
import styled from "styled-components";

const SiteContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
`;

function App(): any {
  const startupData = getStartupData();
  return (
    <SiteContainer>
      <Gifts items={startupData} />
      <Menu />
    </SiteContainer>
  );
}

export default App;
