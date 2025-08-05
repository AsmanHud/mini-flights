import { useNavigate } from "react-router-dom";
import Selectors from "./Selectors";
import InputFields from "./InputFields";
import { Button, Paper } from "@mui/material";
import { useFlightSearchForm } from "../hooks/useFlightSearchForm";

export default function SearchFormContent() {
  const { isFormValid, formData } = useFlightSearchForm();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (isFormValid()) {
      const searchParams = new URLSearchParams({
        originSkyId: formData.origin?.skyId || "",
        originEntityId: formData.origin?.id || "",
        destinationSkyId: formData.destination?.skyId || "",
        destinationEntityId: formData.destination?.id || "",
        departureDate: formData.departureDate?.format("YYYY-MM-DD") || "",
        ...(formData.tripType === "round-trip" &&
          formData.returnDate && {
            returnDate: formData.returnDate.format("YYYY-MM-DD"),
          }),
        adults: formData.adults.toString(),
        children: formData.children.toString(),
        cabinClass: formData.cabinClass,
        tripType: formData.tripType,
      });

      navigate(`/results?${searchParams.toString()}`);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        p: 3,
        borderRadius: 2,
        gap: 3,
      }}
    >
      <Selectors />
      <InputFields />
      <Button
        variant="contained"
        size="large"
        onClick={handleSearch}
        disabled={!isFormValid()}
        sx={{ alignSelf: "flex-start", px: 3, minWidth: "auto" }}
      >
        Search flights
      </Button>
    </Paper>
  );
}
