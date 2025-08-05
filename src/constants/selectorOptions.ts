import type { ReactNode } from "react";

const adults = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export interface SelectOption {
  value: string;
  label: string | ReactNode;
  icon?: ReactNode;
}

export const tripTypeOptions: SelectOption[] = [
  {
    value: "round-trip",
    label: "Round trip",
  },
  {
    value: "one-way",
    label: "One-way",
  },
];

export const adultCountOptions: SelectOption[] = adults.map((value: string) => ({
  value,
  label: value,
}));

export const tripClassOptions: SelectOption[] = [
  {
    value: "economy",
    label: "Economy",
  },
  {
    value: "premium-economy",
    label: "Premium economy",
  },
  {
    value: "business",
    label: "Business",
  },
  {
    value: "first",
    label: "First",
  },
];
