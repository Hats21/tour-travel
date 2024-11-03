/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { CiLocationOn } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";
import { MdEditCalendar } from "react-icons/md";

import Button from "../ui/Button";
import Heading from "../ui/Heading";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 250px;
  height: auto;
  /* overflow: hidden; */
`;
const CardHeader = styled.div`
  width: 250px;
  /* height: 400px; */
  border-radius: 8px;
  border-radius: 12px;

  overflow: hidden;
  & img {
    width: 250px;
    cursor: pointer;
    height: 250px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 350px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

const CardMain = styled.div``;
const CardFooter = styled.div``;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Description = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.4rem;
  color: var(--color-stone-600);
  & svg {
    font-size: 2.4rem;
    color: var(--color-brand-600);
  }
`;

function Card({ imgSrc }) {
  return (
    <StyledCard>
      <CardHeader>
        <Img src={imgSrc} />
      </CardHeader>
      <CardMain>
        <Heading as="h1">Ancient Axum</Heading>
        <Ul>
          <Description>
            <CiLocationOn />
            <span>Axum, Tigray</span>
          </Description>
          <Description>
            <GiPathDistance />
            <span>25km away from mekele</span>
          </Description>
          <Description>
            <MdEditCalendar />
            <span>1991 years recognized</span>
          </Description>
        </Ul>
      </CardMain>
      {/* <CardFooter> */}
      <Button type="secondary">View</Button>
      {/* </CardFooter> */}
      <CardFooter />
    </StyledCard>
  );
}

export default Card;
