import { type SxProps, type Theme } from "@mui/system";

export const viewOrderModalStyle: SxProps<Theme> = {
  height: 600,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", // on extra-small screens
    sm: 600, // on small screens
    md: 800, // on medium and up
  },
  borderRadius: "25px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: {
    xs: 2, // on extra-small screens
    md: 3, // on medium and up
  },
};
