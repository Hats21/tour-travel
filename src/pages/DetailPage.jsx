/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Map from "../ui/Map";
import Review from "../ui/Review";
import DetailHeader from "../ui/DetailHeader";
import Button from "../ui/Button";
import Card from "../ui/Card";
import Carts from "../ui/Carts";
import { useState } from "react";

import { MdQrCodeScanner } from "react-icons/md";
import { FaCircleNodes } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { LiaCarSideSolid } from "react-icons/lia";

// const StyledDetail = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1fr;
//   grid-template-rows: 1fr;
// `;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.8rem;

  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#cc0a66),
    to(#cc0a66)
  );
  background-image: linear-gradient(to right, #cc0a66, #cc0a66);

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  /* margin-bottom: 4.8rem; */
  margin-bottom: 1.2rem;
  color: var(--color-stone-700);
  font-weight: bold;
`;

const StyledMapContainer = styled.div`
  /* height: 100%; */
  /* height: 95vh; */
  /* overflow: scroll; */
  width: 100%;
  background: var(--color-stone-50);
  position: relative;
`;

const Li = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 2.2rem;
  & svg {
    font-size: 1.8rem;
    color: var(--color-stone-600);
  }
`;
function DetailPage() {
  const [counter, setCounter] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledMapContainer>
      <h1>Axum ancient heritage of tigray</h1>
      <p>
        location: <strong>axum</strong>
      </p>
      <DetailHeader />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ justifySelf: "center", marginLeft: "4rem" }}>
          <H1>Quick facts</H1>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Li>
              <MdQrCodeScanner />
              <span>Founded by</span> <strong>Atse kaleb</strong>
            </Li>
            <Li>
              <FaCircleNodes />
              <span>Founded by</span>
              <strong>Atse kaleb</strong>
            </Li>
            <Li>
              <MdOutlineDesignServices />
              <span>Founded by</span>
              <strong>Atse kaleb</strong>
            </Li>
            <Li>
              <LiaCarSideSolid />

              <span>Founded by</span>
              <strong>Atse kaleb</strong>
            </Li>
          </ul>
        </div>

        <div
          style={{
            padding: "3rem",
            border: "none",
            display: "flex",
            flexDirection: "column",
            maxWidth: "800px",
            borderRadius: "8px",
            background: "var(--color-stone-0)",
          }}
        >
          <H1>About the place to visit</H1>
          <p
            style={{
              fontSize: "1.8rem",
              lineHeight: "1.5",
              color: "var(--color-stone-500)",
              letterSpacing: "1px",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            ratione sed sint velit eveniet voluptatibus est corrupti et
            praesentium. Ipsum maxime quasi est adipisci nam sapiente modi, odit
            fugiat minima. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Rerum, vitae similique nostrum hic nulla in repellendus vel
            dolorum cupiditate qui distinctio, suscipit libero dolore,
            accusantium id enim magni quidem. Cum. Lorem ipsum dolor, sit amet
            praesentium ad dolor. Explicabo consequatur quis, similique
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          // width: "120rem",
          gap: "2rem",
          margin: "2rem auto",
          // backgroundColor: "red",
        }}
      >
        <Carts perchaseLevel="first" />
        <Carts perchaseLevel="second" />
        <Carts perchaseLevel="third" />
      </div>
    </StyledMapContainer>
  );
}

export default DetailPage;
