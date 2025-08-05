import { Box, FormControl, InputAdornment, MenuItem, Select } from "@mui/material";
import type { ReactNode } from "react";
import type { SelectChangeEvent } from "@mui/material";

interface SelectOption {
  value: string;
  label: string | ReactNode;
  icon?: ReactNode;
}

interface CustomSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: SelectOption[];
  ariaLabel: string;
  startAdornment?: ReactNode;
}

export default function CustomSelect({
  value,
  onChange,
  options,
  ariaLabel,
  startAdornment,
}: CustomSelectProps) {
  return (
    <FormControl variant="standard">
      <Select
        value={value}
        onChange={onChange}
        displayEmpty
        startAdornment={
          startAdornment ? (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ) : undefined
        }
        inputProps={{
          "aria-label": ariaLabel,
        }}
        sx={{
          "&:before": {
            borderBottom: "none",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.icon ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {option.icon}
                {option.label}
              </Box>
            ) : (
              option.label
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
