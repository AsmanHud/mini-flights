import { Box, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SwapHoriz } from "@mui/icons-material";
import { useFlightSearchForm } from "../hooks/useFlightSearchForm";
import AirportAutocomplete from "./common/AirportAutocomplete";
import dayjs from "dayjs";

export default function InputFields() {
  const { formData, updateFormData } = useFlightSearchForm();

  const handleSwapAirports = () => {
    updateFormData({
      origin: formData.destination,
      destination: formData.origin,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: { xs: 1, sm: 2 },
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          flex: 1,
          minWidth: "200px",
        }}
      >
        <AirportAutocomplete
          label="From"
          value={formData.origin}
          onChange={(airport) => updateFormData({ origin: airport })}
          placeholder="Where from?"
        />
      </Box>

      <IconButton
        onClick={handleSwapAirports}
        sx={{
          mt: 1,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 1,
        }}
        aria-label="Swap airports"
      >
        <SwapHoriz />
      </IconButton>

      <Box
        sx={{
          flex: 1,
          minWidth: "200px",
        }}
      >
        <AirportAutocomplete
          label="To"
          value={formData.destination}
          onChange={(airport) => updateFormData({ destination: airport })}
          placeholder="Where to?"
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          minWidth: "200px",
        }}
      >
        <DatePicker
          label="Departure"
          value={formData.departureDate}
          onChange={(date) => updateFormData({ departureDate: date })}
          minDate={dayjs()}
          slotProps={{
            textField: {
              fullWidth: true,
            },
          }}
        />
      </Box>

      {formData.tripType === "round-trip" && (
        <Box
          sx={{
            flex: 1,
            minWidth: "200px",
          }}
        >
          <DatePicker
            label="Return"
            value={formData.returnDate}
            onChange={(date) => updateFormData({ returnDate: date })}
            minDate={formData.departureDate || dayjs()}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}
