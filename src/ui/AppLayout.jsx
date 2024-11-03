/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const StyledApp = styled.div`
  max-height: calc(100vh-24px);
  padding: 12px 24px;
  display: grid;
  /* grid-template-columns: 2fr 1fr; */
  grid-template-columns: 1fr;

  grid-template-rows: auto 1fr auto;
  /* background: red; */
`;

const Container = styled.div`
  /* width: 100vw; */
  /* height: 100%; */
  height: calc(100vh - 11rem);
  overflow-y: scroll;
`;

function AppLayout() {
  return (
    <StyledApp>
      <Header />
      <Container>
        <Outlet />
        {/* <div style={{ height: "1000px" }}>text som eto be</div> */}
      </Container>
      {/* <Container>
        <Main /> */}
      {/* </Container> */}
      <Footer />
    </StyledApp>
  );
}

export default AppLayout;
