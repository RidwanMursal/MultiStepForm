import { useState } from "react";
import StepFour from "./components/StepFour";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { AddOns } from "./Types";
import NumberBubble from "./components/NumberBubble";

const steps = [
  { index: 1, blurb: "Your info" },
  { index: 2, blurb: "Select plan" },
  { index: 3, blurb: "Add-ons" },
  { index: 4, blurb: "Summary" },
];

function App() {
  // const [plans, setPlans] = useState<Plans>({ selectedPlan: "Arcade" });
  const [CurrPageNumber, setCurrPageNumber] = useState(1);
  const pageNumber = { data: CurrPageNumber, setter: setCurrPageNumber };

  const [service, setService] = useState<AddOns>({
    "Online service": true,
    "Larger storage": false,
    "Customizable Profile": false,
  });
  const serviceState = { data: service, setter: setService };

  const [plans, setPlans] = useState("Arcade");

  const planState = { data: plans, setter: setPlans };
  const [planDurations, setPlanDurations] = useState("Monthly");
  // const [planDurations, setPlanDurations] = useState<PlanDuration>({
  //   selectedDuration: "Monthly",
  // });
  const durationState = { data: planDurations, setter: setPlanDurations };

  return (
    <div className="flex flex-col md:flex-row ">
      <div
        id="banner"
        className="relative -z-10 ml-0 my-0 flex rounded-none overflow-hidden justify-center items-start gap-5 p-5 w-full md:flex-col md:justify-start md:w-1/4  bg-red-200 md:rounded-lg md:my-4 md:ml-4"
      >
        {steps.map((step) => (
          <NumberBubble
            index={step.index}
            blurb={step.blurb}
            currPageNumber={CurrPageNumber}
          />
        ))}
      </div>

      <StepOne pageNumber={pageNumber} />

      <StepTwo
        planState={planState}
        durationState={durationState}
        pageNumber={pageNumber}
      />

      <StepThree serviceState={serviceState} pageNumber={pageNumber} />
      <StepFour
        planState={planState}
        durationState={durationState}
        pageNumber={pageNumber}
      />
    </div>
  );
}

export default App;
