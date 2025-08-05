import { Box, Typography } from "@mui/material";
import HomePageBanner from "../components/HomePageBanner";
import SearchFormContent from "../components/SearchForm";
import { FlightSearchFormProvider } from "../contexts/FlightSearchFormContext";

export default function Home() {
  return (
    <FlightSearchFormProvider>
      <Box
        sx={{
          maxWidth: { xs: "95%", sm: "90%", md: "80%", lg: "60%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          my: { xs: 2, sm: 3, md: 5 },
          gap: { xs: 3, sm: 4, md: 5 },
          px: { xs: 1, sm: 2 },
        }}
      >
        <HomePageBanner />

        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontSize: { xs: "28px", sm: "38px", md: "48px", lg: "53px" },
            textAlign: "center",
            fontWeight: { xs: 500, md: 400 },
          }}
        >
          (Mini) Flights
        </Typography>

        <SearchFormContent />
      </Box>
    </FlightSearchFormProvider>
  );
}
