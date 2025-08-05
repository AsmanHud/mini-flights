import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, Box, Typography, CircularProgress } from "@mui/material";
import { useAirportSearch } from "../../hooks/useFlightAPI";
import type { Airport } from "../../types/api";

interface AirportAutocompleteProps {
  label: string;
  value: Airport | null;
  onChange: (airport: Airport | null) => void;
  placeholder?: string;
}

export default function AirportAutocomplete({
  label,
  value,
  onChange,
  placeholder,
}: AirportAutocompleteProps) {
  const [inputValue, setInputValue] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce the search query to avoid too many API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const { data, isLoading, error } = useAirportSearch(debouncedQuery);

  const airports = data?.data || [];

  return (
    <Autocomplete
      value={value}
      onChange={(_event, newValue) => onChange(newValue)}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue) => setInputValue(newInputValue)}
      options={airports}
      getOptionLabel={(option) => (typeof option === "string" ? option : option.presentation.title)}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      loading={isLoading && debouncedQuery.length >= 2}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          size="medium"
          error={!!error}
          helperText={error ? "Failed to load airports" : ""}
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {isLoading && debouncedQuery.length >= 2 ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Box>
            <Typography variant="body1">{option.presentation.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {option.presentation.subtitle} | {option.skyId}
            </Typography>
          </Box>
        </Box>
      )}
      noOptionsText={
        debouncedQuery.length < 2 ? "Type at least 2 characters to search" : "No airports found"
      }
    />
  );
}
