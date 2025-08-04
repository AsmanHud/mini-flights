import { Box } from "@mui/material";
import homeBanner1 from "../assets/undraw_luggage_k1gn.svg";
import homeBanner2 from "../assets/undraw_calendar_8r6s.svg";
import homeBanner3 from "../assets/undraw_at-the-airport_z3b9.svg";

export default function HomePageBanner() {
  return (
    <Box>
      <Box component="img" src={homeBanner1} sx={{ maxWidth: 250 }} />
      <Box component="img" src={homeBanner2} sx={{ maxWidth: 250 }} />
      <Box component="img" src={homeBanner3} sx={{ maxWidth: 250 }} />
    </Box>
  );
}
