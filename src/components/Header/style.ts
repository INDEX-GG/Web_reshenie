import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderTypography = styled(Typography)(({ theme }) => ({
  marginRight: "10px",
  color: "#AAAAAA",
  fontWeight: "500",
  fontSize: "16px",
}));
export const useHeaderStyle = () => {
  const HeaderWrapMUI = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    // justifyContent: "space-between",
  }));

  const HeaderLeftMUI = styled("div")(({ theme }) => ({
    width: "20%",
    display: "flex",
    justifyContent: "center",
  }));
  const HeaderCenterMUI = styled("div")(({ theme }) => ({
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));
  const HeaderRightMUI = styled("div")(({ theme }) => ({
    width: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));
  return {
    HeaderWrapMUI,
    HeaderLeftMUI,
    HeaderCenterMUI,
    HeaderRightMUI,
  };
};
