/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Map from "../ui/Map";
import Review from "../ui/Review";
import DetailHeader from "../ui/DetailHeader";
import Button from "../ui/Button";
import Card from "../ui/Card";
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
  font-size: 3.2rem;

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
  margin-bottom: 4.8rem;
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
  font-size: 2.4rem;
  & svg {
    font-size: 3.2rem;
    color: var(--color-brand-600);
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
            {!isExpanded
              ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisratione sed sint velit eveniet voluptatibus est corrupti et praesentium. Ipsum maxime quasi est"
              : `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            ratione sed sint velit eveniet voluptatibus est corrupti et
            praesentium. Ipsum maxime quasi est adipisci nam sapiente modi, odit
            fugiat minima. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Rerum, vitae similique nostrum hic nulla in repellendus vel
            dolorum cupiditate qui distinctio, suscipit libero dolore,
            accusantium id enim magni quidem. Cum. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Dolore aperiam illo maiores? Ex
            praesentium ad dolor. Explicabo consequatur quis, similique
            praesentium magni laboriosam nisi accusantium, ullam minus aliquam
            suscipit laudantium?`}
          </p>
          {!isExpanded ? (
            <button onClick={() => setIsExpanded(true)}>
              Continue reading
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          background: "var(--color-stone-100)",
          maxWidth: "400px",
          alignItems: "center",
        }}
      >
        <img
          src="img/img1.jpg"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />

        <p>What are you waiting for?</p>
        <Button>Book Now</Button>
      </div>

      {/* <div
        style={{
          position: "absolute",
          top: "0",
          right: "50px",
          padding: "1rem",
          background: "var(--color-stone-0)",
        }}
      >
        <p>Other peoples also visit</p>
        <div
          style={{
            height: "600px",
            overflowY: "scroll",
          }}
        >
          <CardSmall imgSrc="img/img1.jpg" />

          <CardSmall imgSrc="img/img2.jpg" />
          <CardSmall imgSrc="img/img3.jpg" />
          <CardSmall imgSrc="img/img4.jpg" />
        </div>
      </div> */}
    </StyledMapContainer>
  );
}

export default DetailPage;
