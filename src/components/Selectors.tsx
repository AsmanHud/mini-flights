import { ArrowRightAlt, Group, SwapHoriz } from "@mui/icons-material";
import { Box } from "@mui/material";
import { adultCountOptions, tripClassOptions, tripTypeOptions } from "../constants/selectorOptions";
import { useFlightSearchForm } from "../hooks/useFlightSearchForm";
import CustomSelect from "./common/CustomSelect";

export default function Selectors() {
  const { formData, updateFormData } = useFlightSearchForm();

  const tripTypeOptionsWithIcons = tripTypeOptions.map((option) => ({
    ...option,
    icon: option.value === "round-trip" ? <SwapHoriz /> : <ArrowRightAlt />,
  }));

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <CustomSelect
        value={formData.tripType}
        onChange={(e) => updateFormData({ tripType: e.target.value as "round-trip" | "one-way" })}
        options={tripTypeOptionsWithIcons}
        ariaLabel="Trip Type"
      />
      <CustomSelect
        value={formData.adults.toString()}
        onChange={(e) => updateFormData({ adults: parseInt(e.target.value, 10) })}
        options={adultCountOptions}
        ariaLabel="Adult Count"
        startAdornment={<Group />}
      />
      <CustomSelect
        value={formData.cabinClass}
        onChange={(e) =>
          updateFormData({
            cabinClass: e.target.value as "economy" | "premium-economy" | "business" | "first",
          })
        }
        options={tripClassOptions}
        ariaLabel="Trip Class"
      />
    </Box>
  );
}
