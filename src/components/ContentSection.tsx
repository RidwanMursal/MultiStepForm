import React, { ReactNode } from "react";
type ContentSectionProps = {
  children: ReactNode;
  stepNumber: number;
  pageNumber: number;
};
const ContentSection = ({
  children,
  stepNumber,
  pageNumber,
}: ContentSectionProps) => {
  return (
    <div
      data-visible={stepNumber === pageNumber ? "true" : "false"}
      className="flex flex-col justify-between items-center md:h-screen  md:items-center md:w-full md:py-28 data-[visible=false]:hidden "
    >
      {children}
    </div>
  );
};

export default ContentSection;
