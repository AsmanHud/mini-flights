import axios from "axios";
import type { AirportSearchResponse, LocaleResponse } from "../types/api";

const BASE_URL = "https://sky-scrapper.p.rapidapi.com";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
  },
});

// Check if the API is available
export const checkServer = async (): Promise<boolean> => {
  try {
    const response = await apiClient.get("/api/v1/checkServer");
    return response.data.status;
  } catch (error) {
    console.error("Server check failed:", error);
    return false;
  }
};

// Get supported locales and currencies
export const getLocales = async (): Promise<LocaleResponse> => {
  const response = await apiClient.get("/api/v1/getLocale");
  return response.data;
};

// Search for airports/cities with autocomplete
export const searchAirports = async (
  query: string,
  locale: string = "en-US",
): Promise<AirportSearchResponse> => {
  const response = await apiClient.get("/api/v1/flights/searchAirport", {
    params: {
      query,
      locale,
    },
  });
  return response.data;
};

// Helper function to convert cabin class names to API format
export const mapCabinClassToAPI = (
  cabinClass: string,
): "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST" => {
  switch (cabinClass.toLowerCase()) {
    case "economy":
      return "ECONOMY";
    case "premium-economy":
      return "PREMIUM_ECONOMY";
    case "business":
      return "BUSINESS";
    case "first":
      return "FIRST";
    default:
      return "ECONOMY";
  }
};
