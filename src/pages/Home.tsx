import { Box, Typography } from "@mui/material";
import HomePageBanner from "../components/HomePageBanner";
import SearchFormContent from "../components/SearchForm";
import { FlightSearchFormProvider } from "../contexts/FlightSearchFormContext";

export default function Home() {
  return (
    <FlightSearchFormProvider>
      <Box
        sx={{
          maxWidth: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          my: 5,
          gap: 5,
          "@media (max-width: 768px)": {
            maxWidth: "90%",
          },
        }}
      >
        <HomePageBanner />

        <Typography variant="h2" component="h1" fontSize="53px">
          (Mini) Flights
        </Typography>

        <SearchFormContent />
      </Box>
    </FlightSearchFormProvider>
  );
}
