import { NumberState, ServicesState } from "../Types";
import CardHeader from "./CardHeader";
import { services } from "../constants";
import AddOnPicker from "./AddOnPicker";
import ProgressButtons from "./ProgressButtons";
import ContentSection from "./ContentSection";
import Card from "./Card";

type StepThreeProps = {
  serviceState: ServicesState;
  pageNumber: NumberState;
};

const stepNumber = 3;

const StepThree = ({ serviceState, pageNumber }: StepThreeProps) => {
  return (
    <ContentSection pageNumber={pageNumber.data} stepNumber={stepNumber}>
      <Card>
        <CardHeader
          title="Select your plan"
          info="You have the option of montly or yearly billing"
        />

        <div
          className="flex flex-col gap-5 mt-14"
          //className="grid grid-cols-1 gap-5 w-full"
        >
          {services.map((service) => (
            <AddOnPicker
              serviceState={serviceState}
              currentService={service}
              key={service}
            />
          ))}
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

export default StepThree;
