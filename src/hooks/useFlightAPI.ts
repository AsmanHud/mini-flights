import { useQuery } from "@tanstack/react-query";
import { searchAirports } from "../api/skyScrapperAPI";

export const useAirportSearch = (query: string, locale: string = "en-US") => {
  return useQuery({
    queryKey: ["airports", query, locale],
    queryFn: () => searchAirports(query, locale),
    enabled: query.length >= 2,
    staleTime: 10 * 60 * 1000,
  });
};
