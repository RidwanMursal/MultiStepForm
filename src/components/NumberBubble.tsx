import React from "react";

type NumberBubbleProps = {
  index: number;
  currPageNumber: number;
  blurb: string;
};

const NumberBubble = ({ index, currPageNumber, blurb }: NumberBubbleProps) => {
  return (
    <div className="grid grid-cols-[auto,1fr] items-center gap-4">
      <div
        data-selected={currPageNumber === index ? "true" : "false"}
        className="flex justify-center items-center w-10 h-10 rounded-full outline-2 outline outline-white data-[selected=true]:bg-blue-300"
      >
        {index}
      </div>
      <div className="hidden md:block ">
        <p className="opacity-50">Step {index}</p>
        <p className="font-bold uppercase">{blurb}</p>
      </div>
    </div>
  );
};

export default NumberBubble;
