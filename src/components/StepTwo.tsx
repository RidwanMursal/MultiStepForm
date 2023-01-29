import React, { useEffect, useState } from "react";
import arcadeImage from "../assets/images/icon-arcade.svg";
import { Switch } from "@mui/material";
import { NumberState, StringState } from "../Types";
import CardHeader from "./CardHeader";
import PlanCard from "./PlanCard";
import { plans } from "../constants";
import ProgressButtons from "./ProgressButtons";
import ContentSection from "./ContentSection";
import Card from "./Card";

type StepTwoProps = {
  planState: StringState;
  durationState: StringState;
  pageNumber: NumberState;
};

const stepNumber = 2;

const StepTwo = ({ planState, durationState, pageNumber }: StepTwoProps) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    durationState.setter(checked ? "Yearly" : "Monthly");
  }, [checked]);

  return (
    <ContentSection pageNumber={pageNumber.data} stepNumber={stepNumber}>
      <Card>
        <CardHeader
          title="Select your plan"
          info="You have the option of montly or yearly billing"
        />
        <div className="mt-14 flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
            {plans.map((plan) => (
              <PlanCard planState={planState} currPlan={plan} key={plan} />
            ))}
          </div>

          <div className="flex w-full justify-center items-center gap-5 py-2 rounded bg-blue-300">
            <p
              data-display={checked ? "false" : "true"}
              className="opacity-50 data-[display=true]:opacity-100 data-[display=true]:text-blue-700"
            >
              Monthly
            </p>
            <Switch checked={checked} onChange={() => setChecked(!checked)} />
            <p
              data-display={checked ? "true" : "false"}
              className="opacity-50 data-[display=true]:opacity-100 data-[display=true]:text-blue-700"
            >
              Yearly
            </p>
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

export default StepTwo;
