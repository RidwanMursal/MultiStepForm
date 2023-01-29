import { Dispatch, SetStateAction } from "react";

export type NumberState = {
  data: number;
  setter: Dispatch<SetStateAction<number>>;
};

export type StringState = {
  data: string;
  setter: Dispatch<SetStateAction<string>>;
};

export type ServicesState = {
  data: AddOns;
  setter: Dispatch<SetStateAction<AddOns>>;
};

export type AddOns = {
  "Online service": boolean;
  "Larger storage": boolean;
  "Customizable Profile": boolean;
};

export type AddOn = {
  addOn: "Online service" | "Larger storage" | "Customizable Profile";
};
