import { Box, Paper, Typography } from "@mui/material";
import homeBanner from "../assets/undraw_luggage_k1gn.svg";
import SearchBox from "../components/SearchBox";

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: 1248,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mx: "auto",
        my: 5,
        px: 2,
        gap: 4,
      }}
    >
      <Box component="img" src={homeBanner} sx={{ maxWidth: 300 }} />

      <Typography variant="h2" component="h1">
        Mini Flights
      </Typography>

      <Paper
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 960,
          display: "flex",
          flexDirection: "column",
          p: 3,
          borderRadius: 2,
          elevation: 5,
        }}
      >
        <SearchBox />
      </Paper>
    </Box>
  );
}
