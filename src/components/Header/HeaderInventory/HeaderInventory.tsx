import React from "react";
import {
  buttonClasses,
  Input,
  inputClasses,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import HeaderInventoryInput from "./HeaderInventoryInput/HeaderInventoryInput";

const HeaderInventoryWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
const HeaderInventoryContainer = styled("div")(({ theme }) => ({
  width: "86px",
  height: "35px",
  background: " #E8E8E8",
}));
const HeaderInventoryTypography = styled(Typography)(({ theme }) => ({
  marginRight: "10px",
  color: "#AAAAAA",
  fontWeight: "500",
  fontSize: "18px",
  [theme.breakpoints.down(1400)]: {
    fontSize: "16px",
  },
}));
// const InputHeader = styled(Input)({
//   [`&.${inputClasses.input}`]: {
//     // textAlign: "center",
//     textAlign: "center",
//   },
// });

const HeaderInventory = () => {
  return (
    <HeaderInventoryWrap>
      <HeaderInventoryTypography>Запас товара</HeaderInventoryTypography>
      <HeaderInventoryContainer>
        {/* <InputHeader /> */}
        {/* <input type="text" /> */}
        {/* <HeaderInventoryInput /> */}
      </HeaderInventoryContainer>
    </HeaderInventoryWrap>
  );
};

export default React.memo(HeaderInventory);
