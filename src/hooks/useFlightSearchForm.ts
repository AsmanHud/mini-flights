import { useContext } from "react";
import {
  FlightSearchFormContext,
  type FlightSearchFormContextType,
} from "../contexts/FlightSearchFormContext";

export const useFlightSearchForm = (): FlightSearchFormContextType => {
  const context = useContext(FlightSearchFormContext);
  if (!context) {
    throw new Error("useFlightSearchForm must be used within a FlightSearchFormProvider");
  }
  return context;
};
