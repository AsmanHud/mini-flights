import { useSearchParams, Link } from "react-router-dom";
import { Box, Typography, Button, Paper } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const searchDetails = {
    origin: searchParams.get("originSkyId") || "Unknown",
    destination: searchParams.get("destinationSkyId") || "Unknown",
    departureDate: searchParams.get("departureDate") || "Unknown",
    returnDate: searchParams.get("returnDate"),
    adults: searchParams.get("adults") || "1",
    children: searchParams.get("children") || "0",
    cabinClass: searchParams.get("cabinClass") || "economy",
    tripType: searchParams.get("tripType") || "round-trip",
  };

  return (
    <Box sx={{ maxWidth: "1200px", mx: "auto", p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Button component={Link} to="/" startIcon={<ArrowBack />} sx={{ mb: 2 }}>
          Back to search
        </Button>
        <Typography variant="h4" component="h1" gutterBottom>
          Flight Results
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {searchDetails.origin} → {searchDetails.destination} | {searchDetails.adults} adult
          {parseInt(searchDetails.adults) > 1 ? "s" : ""} | {searchDetails.cabinClass}
        </Typography>
      </Box>
      <Paper sx={{ p: 5 }}>
        <Typography>The page is currently under construction!</Typography>
      </Paper>
    </Box>
  );
}
