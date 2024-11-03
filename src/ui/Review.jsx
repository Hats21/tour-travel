/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useState } from "react";

const StyledCard = styled.div`
  display: grid;
  flex-direction: column;
  gap: 1.2rem;
  max-width: 300px;
  font-size: 1.4rem;
`;

const Header = styled.div`
  /* display: flex; */
  align-items: center;
  justify-content: flex-start;
  gap: 2.4rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.8rem 1.2rem;
  margin-right: 5rem;
`;

const UserProfile = styled.img`
  /* border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover; */
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
`;
function Review() {
  const [textExpanded, setTextExpanded] = useState(false);
  return (
    <StyledCard>
      <Header>
        <div style={{ maxWidth: "5rem" }}>
          <UserProfile src="users/user2.jpg" />
        </div>
      </Header>
      <div
        style={{
          fontStyle: "italic",
        }}
      >
        {!textExpanded
          ? '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut optiomolestiae similique veniam nihil temporibus dignissimos. Aliquid, similique a culpa cum"'
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut optiomolestiae similique veniam nihil temporibus dignissimos. Aliquid,  similique a culpa cum recusandae distinctio commodi quas laboriosam  possimus reprehenderit at!"}
        {/* <button onClick={() => setTextExpanded((expanded) => !expanded)}>
          {textExpanded ? "showLess" : "showMore"}
        </button> */}
      </div>
      <Footer>
        <strong>&mdash;Hatsey</strong>
      </Footer>
    </StyledCard>
  );
}

export default Review;
