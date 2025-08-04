import { Box, Paper, Typography } from "@mui/material";
import SearchBox from "../components/SearchBox";
import HomePageBanner from "../components/HomePageBanner";

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
      <HomePageBanner />

      <Typography variant="h2" component="h1" fontSize="53px">
        (Mini) Flights
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
