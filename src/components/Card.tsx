import React, { ReactNode } from "react";
type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-md shadow-md w-[95%] py-6 px-4 outline-2 md:w-1/2 md:px-0 md:py-0 md:shadow-none min-w-[300px] relative bottom-16 z-10 bg-white ">
      {children}
    </div>
  );
};

export default Card;
