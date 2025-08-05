import { Box } from "@mui/material";
import homeBanner1 from "../assets/undraw_luggage_k1gn.svg";
import homeBanner2 from "../assets/undraw_calendar_8r6s.svg";
import homeBanner3 from "../assets/undraw_at-the-airport_z3b9.svg";

export default function HomePageBanner() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <Box
        component="img"
        src={homeBanner1}
        sx={{
          maxWidth: { xs: 200, sm: 220, md: 250 },
          width: "100%",
          height: "auto",
          flex: { xs: "1 1 100%", sm: "0 1 auto" },
          maxHeight: { xs: 180, sm: 200, md: 220 },
        }}
        alt="Luggage illustration"
      />
      <Box
        component="img"
        src={homeBanner2}
        sx={{
          maxWidth: { sm: 220, md: 250 },
          width: "100%",
          height: "auto",
          display: { xs: "none", sm: "block", lg: "block" },
          flex: "0 1 auto",
          maxHeight: { sm: 200, md: 220 },
        }}
        alt="Calendar illustration"
      />
      <Box
        component="img"
        src={homeBanner3}
        sx={{
          maxWidth: 250,
          width: "100%",
          height: "auto",
          display: { xs: "none", sm: "none", md: "none", lg: "none", xl: "block" },
          flex: "0 1 auto",
          maxHeight: 220,
        }}
        alt="Airport illustration"
      />
    </Box>
  );
}
