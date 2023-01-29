import React from "react";
import { ServicesState, AddOn } from "../Types";
import { Checkbox } from "@mui/material";

type AddOnPickerProps = {
  serviceState: ServicesState;
  currentService: "Online service" | "Larger storage" | "Customizable Profile";
};

const AddOnPicker = ({ serviceState, currentService }: AddOnPickerProps) => {
  return (
    <div
      data-selected={serviceState.data[currentService] ? "true" : null}
      onClick={() =>
        serviceState.setter((prev) => {
          return {
            ...prev,
            [currentService]: !prev[currentService],
          };
        })
      }
      className="cursor-pointer grid grid-cols-[auto,1fr,auto] items-center gap-3  p-3 rounded outline outline-2 outline-gray-200 shadow-sm hover:outline-blue-600  data-[selected=true]:bg-blue-200"
    >
      <Checkbox checked={serviceState.data[currentService]} />
      <div>
        <p className="font-bold text-lg">{currentService}</p>
        <p className="opacity-50">Custom theme on your profile</p>
      </div>
      <p className="text-lg text-blue-300">+$1/mo</p>
    </div>
  );
};

export default AddOnPicker;
