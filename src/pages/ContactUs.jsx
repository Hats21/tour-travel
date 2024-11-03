import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;

  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(var(--color-green-500)),
    to(var(--color-brand-100))
  );
  background-image: linear-gradient(
    to right,
    var(--color-green-500),
    var(--color-brand-100)
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
function ContactUs() {
  return (
    <div style={{ fontSize: "1.8rem" }}>
      <H1>Please don&apos;t hesitate to contact us!</H1>
      <ul>
        <li>tourTravel@gmail.com</li>
        <li>tourTravel@yahoo.com</li>
        <li>facebook</li>
        <li>Instagram</li>
        <li>LinkidIn</li>
        <li>Telegram</li>
        <li>twitter</li>
        <li>Phone number: +251 914 44 55 66</li>
      </ul>
    </div>
  );
}

export default ContactUs;
