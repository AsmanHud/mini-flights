// Sky-Scrapper API types

export interface Airport {
  id: string;
  skyId: string;
  presentation: {
    title: string;
    subtitle: string;
  };
}

export interface AirportSearchResponse {
  status: boolean;
  timestamp: number;
  data: Airport[];
}

export interface SearchParams {
  originSkyId: string;
  destinationSkyId: string;
  originEntityId: string;
  destinationEntityId: string;
  departureDate: string; // YYYY-MM-DD
  returnDate?: string; // YYYY-MM-DD
  adults: number;
  children?: number;
  cabinClass: "ECONOMY" | "PREMIUM_ECONOMY" | "BUSINESS" | "FIRST";
  currency: string;
  market: string;
  countryCode: string;
}

export interface FlightPrice {
  raw: number;
  formatted: string;
  bookingUrl: string;
}

export interface FlightItinerary {
  id: string;
  price: FlightPrice;
  legs: string[];
  segments: number;
  stops: number;
  duration: number; // minutes
}

export interface FlightLeg {
  segments: string[];
  origin: string;
  destination: string;
  departure: string; // ISO datetime
  arrival: string; // ISO datetime
  carrier: string;
  duration: number; // minutes
}

export interface FlightSearchContext {
  complete: boolean;
  totalItineraries: number;
}

export interface FlightSearchResponse {
  status: boolean;
  timestamp: number;
  data: {
    context: FlightSearchContext;
    itineraries: FlightItinerary[];
    legs: Record<string, FlightLeg>;
    carriers: Record<string, string>;
    filters?: Record<string, unknown>;
  };
}

export interface LocaleData {
  currency: string;
  market: string;
  countryCode: string;
}

export interface LocaleResponse {
  status: boolean;
  timestamp: number;
  data: LocaleData[];
}
