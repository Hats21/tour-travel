/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../ui/Button";
import Input from "../ui/Input";

import "react-datepicker/dist/react-datepicker.css";

import { FaLocationCrosshairs } from "react-icons/fa6";
import DatePicker from "react-datepicker";

import StarRating from "../ui/StarRating";

const Location = styled.div`
  position: relative;

  /* & button svg {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    font-size: 1.8rem;

    background-color: var(--color-brand-500);
    color: var(--color-stone-0);
    /* padding: 8px; 
  } */
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  background-color: var(--color-brand-500);
  border: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 1.8rem;

  & svg {
    position: relative;
    font-size: 2.8rem;
    color: var(--color-stone-0);
  }
`;

const Form = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  display: flex;
  padding: 1rem 1.2rem;
  background: var(--color-stone-0);
  border: 1px solid var(--color-stone-300);
  border-radius: 8px;
  margin: 10rem auto;
  box-shadow: 0 5px 10px var(--color-stone-100);
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-stone-100);
  }
  &:last-child {
    /* border-bottom: none; */
    align-self: flex-end;
  }
`;

const Label = styled.label`
  font-size: 1.6rem;
  color: var(--color-stone-600);
  font-weight: 500;
`;

function PlaceBooking() {
  return (
    <Form>
      <FormRow>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="Your name*" />
      </FormRow>
      <FormRow>
        <Label htmlFor="phone">Phone number</Label>
        <Input type="tel" id="phone" placeholder="your phone*" />
      </FormRow>{" "}
      <FormRow>
        <Label htmlFor="date">Date of arrival</Label>
        <Input type="date" id="date" />
        {/* <DatePicker selected={Date.now()} /> */}
      </FormRow>{" "}
      <FormRow>
        <Label htmlFor="location">departed from</Label>
        <Location>
          <Input id="location" type="text" iconPosition="right" />
          <StyledButton title="Detect location">
            <FaLocationCrosshairs />
          </StyledButton>
        </Location>
      </FormRow>{" "}
      {/* <div
        style={{
          display: "flex",
          marginTop: "5rem",
        }}
      > */}
      <FormRow>
        <Label htmlFor="stays">Stay days</Label>
        <Input type="number" id="stays" />
      </FormRow>
      <FormRow>
        <Label htmlFor="description">Description</Label>
        <textarea
          id="description"
          cols="45"
          rows="4"
          placeholder="Any think you want us to do(optional)"
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "2px solid var(color-stone-500)",
          }}
        />
      </FormRow>
      <FormRow>
        <Button type="secondary">Place Booking</Button>
      </FormRow>
      {/* </div> */}
      {/* <StarRating
        message={["Ugly", "Not bad", "Good", "Very good", "Amazing"]}
      /> */}
    </Form>
  );
}

export default PlaceBooking;
