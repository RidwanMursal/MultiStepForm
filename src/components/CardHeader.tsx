import React from "react";

type CardHeaderProps = {
  title: string;
  info: string;
};

const CardHeader = ({ title, info }: CardHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="opacity-50">{info}</p>
    </div>
  );
};

export default CardHeader;
