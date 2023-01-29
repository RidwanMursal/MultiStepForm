import React from "react";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { StringState } from "../Types";

type PlanCardsProps = {
  planState: StringState;
  currPlan: string;
};

const PlanCard = ({ planState, currPlan }: PlanCardsProps) => {
  let image = "";
  if (currPlan === "Arcade") image = arcadeIcon;
  else if (currPlan === "Advanced") image = advancedIcon;
  else if (currPlan === "Pro") image = proIcon;
  return (
    <div
      data-selected={planState.data === currPlan ? "true" : null}
      onClick={() => planState.setter(currPlan)}
      className="cursor-pointer flex md:flex-col justify-between p-2 rounded outline outline-2 outline-gray-200 shadow-sm hover:outline-blue-600 md:min-h-[260px] data-[selected=true]:bg-blue-200"
    >
      <img className="w-12 h-12" src={image} alt="" />
      <div>
        <p className="font-bold">{currPlan}</p>
        <p className="opacity-50">$9/mo</p>
      </div>
    </div>
  );
};

export default PlanCard;
