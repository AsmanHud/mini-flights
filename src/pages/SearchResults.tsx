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

      {/* temporary paper component */}
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          🚧 Results page coming soon!
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          For now, here's what you searched for:
        </Typography>

        <Box sx={{ mb: 3, textAlign: "left", maxWidth: 400, mx: "auto" }}>
          <Typography variant="body1">
            <strong>Trip type:</strong> {searchDetails.tripType}
          </Typography>
          <Typography variant="body1">
            <strong>From:</strong> {searchDetails.origin}
          </Typography>
          <Typography variant="body1">
            <strong>To:</strong> {searchDetails.destination}
          </Typography>
          <Typography variant="body1">
            <strong>Departure:</strong> {searchDetails.departureDate}
          </Typography>
          {searchDetails.returnDate && (
            <Typography variant="body1">
              <strong>Return:</strong> {searchDetails.returnDate}
            </Typography>
          )}
          <Typography variant="body1">
            <strong>Adults:</strong> {searchDetails.adults}
          </Typography>
          {searchDetails.children !== "0" && (
            <Typography variant="body1">
              <strong>Children:</strong> {searchDetails.children}
            </Typography>
          )}
          <Typography variant="body1">
            <strong>Class:</strong> {searchDetails.cabinClass}
          </Typography>
        </Box>

        <Button component={Link} to="/" variant="contained">
          Search again
        </Button>
      </Paper>
    </Box>
  );
}
