import React from "react";

type ProgressButtonsProps = {
  onBackClick: Function;
  onFrontClick: Function;
  backExists: boolean;
};

const ProgressButtons = ({
  onBackClick,
  onFrontClick,
  backExists,
}: ProgressButtonsProps) => {
  return (
    <div
      data-right={backExists ? "true" : "false"}
      className="flex justify-between items-center fixed bottom-0 h-20 bg-black md:static w-full px-3 md:px-0 md:bg-white md:w-1/2  min-w-[300px]
    data-[right=false]:justify-end"
    >
      <button
        className="opacity-50 data-[exists=false]:hidden"
        onClick={() => onBackClick()}
        data-exists={backExists ? "true" : "false"}
      >
        Go back
      </button>
      <button
        className=" bg-blue-600 text-white py-2 px-6 rounded-md"
        onClick={() => onFrontClick()}
      >
        Next Step
      </button>
    </div>
  );
};

export default ProgressButtons;
