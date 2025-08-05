import React, { createContext, useState, type ReactNode } from "react";
import { Dayjs } from "dayjs";
import type { Airport } from "../types/api";

export interface FlightSearchFormData {
  tripType: "round-trip" | "one-way";
  origin: Airport | null;
  destination: Airport | null;
  departureDate: Dayjs | null;
  returnDate: Dayjs | null;
  adults: number;
  children: number;
  cabinClass: "economy" | "premium-economy" | "business" | "first";
}

export interface FlightSearchFormContextType {
  formData: FlightSearchFormData;
  updateFormData: (updates: Partial<FlightSearchFormData>) => void;
  resetForm: () => void;
  isFormValid: () => boolean;
}

const initialFormData: FlightSearchFormData = {
  tripType: "round-trip",
  origin: null,
  destination: null,
  departureDate: null,
  returnDate: null,
  adults: 1,
  children: 0,
  cabinClass: "economy",
};

const FlightSearchFormContext = createContext<FlightSearchFormContextType | undefined>(undefined);

export { FlightSearchFormContext };

interface FlightSearchFormProviderProps {
  children: ReactNode;
}

export const FlightSearchFormProvider: React.FC<FlightSearchFormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<FlightSearchFormData>(initialFormData);

  const updateFormData = (updates: Partial<FlightSearchFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const isFormValid = () => {
    const { origin, destination, departureDate, tripType, returnDate } = formData;

    // Basic validation
    if (!origin || !destination || !departureDate) {
      return false;
    }
    if (tripType === "round-trip" && !returnDate) {
      return false;
    }

    return true;
  };

  const value: FlightSearchFormContextType = {
    formData,
    updateFormData,
    resetForm,
    isFormValid,
  };

  return (
    <FlightSearchFormContext.Provider value={value}>{children}</FlightSearchFormContext.Provider>
  );
};
