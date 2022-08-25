import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  marginRight: "10px",
  color: "#AAAAAA",
  fontWeight: "500",
  fontSize: "18px",
  [theme.breakpoints.down(1500)]: {
    fontSize: "16px",
  },
}));
export const useHeaderStyle = () => {
  const HeaderWrapMUI = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
  }));
  const HeaderLeftMUI = styled("div")(({ theme }) => ({
    width: "30%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.between(0, 1500)]: {
      width: "20%",
    },
  }));
  const HeaderCenterMUI = styled("div")(({ theme }) => ({
    width: "40%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    [theme.breakpoints.between(0, 1500)]: {
      width: "80%",
    },
  }));
  const HeaderRightMUI = styled("div")(({ theme }) => ({
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.between(0, 1500)]: {
      width: "20%",
    },
  }));
  return {
    HeaderWrapMUI,
    HeaderLeftMUI,
    HeaderCenterMUI,
    HeaderRightMUI,
  };
};
