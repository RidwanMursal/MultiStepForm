import React from "react";

type ErrorMessageProps = {
  errorCondition: boolean;
  message: string;
};

const ErrorMessage = ({ errorCondition, message }: ErrorMessageProps) => {
  return (
    <p
      className="hidden text-red-500 data-[error=true]:block absolute top-0 right-0"
      data-error={errorCondition ? "true" : "false"}
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
