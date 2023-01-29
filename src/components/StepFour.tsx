import React from "react";
import { NumberState, StringState } from "../Types";
import Card from "./Card";
import CardHeader from "./CardHeader";
import ContentSection from "./ContentSection";
import ProgressButtons from "./ProgressButtons";

const stepNumber = 4;

type StepThreeProps = {
  planState: StringState;
  durationState: StringState;
  pageNumber: NumberState;
};

const StepFour = ({ planState, durationState, pageNumber }: StepThreeProps) => {
  return (
    <ContentSection pageNumber={pageNumber.data} stepNumber={stepNumber}>
      <Card>
        <CardHeader
          title="Finishing up"
          info="Double-check everything looks OK before confirming"
        />

        <div className="mt-14 flex flex-col gap-7 ">
          <div className="w-full p-4 md:p-7 rounded bg-violet-200">
            <div className="w-full pb-3 flex justify-between items-center  rounded  relative border-b-2 border-b-black">
              <div>
                <p className="font-bold text-lg md:text-xl">
                  {planState.data} ({durationState.data})
                </p>
                <button
                  className="border-b-2 border-b-black"
                  onClick={() => pageNumber.setter(2)}
                >
                  Change
                </button>
              </div>
              <p>$9/month</p>
            </div>

            <div className="pt-4 flex justify-between">
              <p>Online</p>
              <p>+1</p>
            </div>

            <div className="pt-4 flex justify-between">
              <p>Online</p>
              <p>+1 </p>
            </div>
          </div>
          <div className="p3 flex justify-between w-full">
            <p className="opacity-50">Total (per month)</p>
            <p className="text-lg font-semibold">+$12/mo</p>
          </div>
        </div>
      </Card>
      <ProgressButtons
        onBackClick={() => pageNumber.setter((prev) => prev - 1)}
        onFrontClick={() => pageNumber.setter((prev) => prev + 1)}
        backExists={true}
      />
    </ContentSection>
  );
};

export default StepFour;
