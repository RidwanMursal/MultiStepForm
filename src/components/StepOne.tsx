import React, { useEffect, useState } from "react";
import { NumberState } from "../Types";
import CardHeader from "./CardHeader";
import ContentSection from "./ContentSection";
import ErrorMessage from "./ErrorMessage";
import ProgressButtons from "./ProgressButtons";
import Card from "./Card";

const stepNumber = 1;

const validEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validName = (name: string) => {
  const nameRegex = /^[A-Za-z]+$/;
  return nameRegex.test(name);
};

const validPhoneNumber = (phoneNumber: string) => {
  const numberRegex = /^[0-9]+$/;
  if (numberRegex.test(phoneNumber) && phoneNumber.length >= 9) return true;
  else return false;
};

const isEmpty = (string: string) => {
  return string.length === 0;
};

const cleanSpaces = (string: string) => {
  let spacelessString = "";
  for (let i = 0; i < string.length; i++) {
    if (!(string[i] === " ")) spacelessString += string[i];
  }
  return spacelessString;
};

type StepOneProps = {
  pageNumber: NumberState;
};

const StepOne = ({ pageNumber }: StepOneProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorsFlags, setErrorsFlags] = useState({
    name: { flag: false, empty: false },
    email: { flag: false, empty: false },
    phoneNumber: { flag: false, empty: false },
  });
  const [hasError, setHasError] = useState(false);

  const validateForm = () => {
    const updatedErrors = { ...errorsFlags };

    updatedErrors.name.empty = isEmpty(name);
    updatedErrors.email.empty = isEmpty(email);
    updatedErrors.phoneNumber.empty = isEmpty(phoneNumber);

    updatedErrors.name.flag = !validName(name);
    updatedErrors.email.flag = !validEmail(email);
    updatedErrors.phoneNumber.flag = !validPhoneNumber(
      cleanSpaces(phoneNumber)
    );

    console.log("NEW UPDATED ERRORS ARE", updatedErrors);
    setErrorsFlags(updatedErrors);

    let error = false;
    Object.values(updatedErrors).forEach((obj) => {
      if (Object.values(obj).some((value) => value)) {
        error = true;
      }
    });

    setHasError(error);
    if (!error) {
      pageNumber.setter((prev) => prev + 1);
    }

    return;
  };
  console.log("name is", name);

  return (
    <ContentSection pageNumber={pageNumber.data} stepNumber={stepNumber}>
      <Card>
        <CardHeader
          title="Personal info"
          info="Please provide your name, email address, and phone number"
        />

        <div className="flex flex-col gap-5 md:mt-14">
          <div className="relative">
            <label htmlFor="name">Name</label>
            <input
              className="p-2 shadow-sm w-full rounded outline outline-2 outline-gray-200 hover:outline-blue-600 focus:outline-blue-600"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <ErrorMessage
              errorCondition={errorsFlags.name.empty}
              message={"Can't be empty"}
            />
            <ErrorMessage
              errorCondition={errorsFlags.name.flag && !errorsFlags.name.empty}
              message={"Name can't contain special characters (except -)"}
            />
          </div>

          <div className="relative">
            <label htmlFor="email">Email Address</label>
            <input
              className="p-2 shadow-sm w-full rounded outline outline-2 outline-gray-200 hover:outline-blue-600 focus:outline-blue-600"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ErrorMessage
              errorCondition={errorsFlags.email.empty}
              message={"Can't be empty"}
            />
            <ErrorMessage
              errorCondition={
                errorsFlags.email.flag && !errorsFlags.email.empty
              }
              message={"Not a valid email."}
            />
          </div>

          <div className="relative">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              className="p-2 shadow-sm w-full rounded outline outline-2 outline-gray-200 hover:outline-blue-600 focus:outline-blue-600"
              name="phone-number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <ErrorMessage
              errorCondition={errorsFlags.phoneNumber.empty}
              message={"Can't be empty"}
            />
            <ErrorMessage
              errorCondition={
                errorsFlags.phoneNumber.flag && !errorsFlags.phoneNumber.empty
              }
              message={"Not a valid phone number."}
            />
          </div>
        </div>
      </Card>

      <ProgressButtons
        onBackClick={() => pageNumber.setter((prev) => prev - 1)}
        onFrontClick={() => validateForm()}
        backExists={false}
      />
    </ContentSection>
  );
};

export default StepOne;
