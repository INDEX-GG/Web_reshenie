import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import UpArrowIcon from "assets/icon/UpArrowIcon";
import DownArrowIcon from "assets/icon/DownArrowIcon";
import { useFormContext } from "react-hook-form";

function createData(id: number, body: string, title: string) {
  return { id, body, title };
}
const data = [
  createData(1, "От А до Я", "rc"),
  createData(2, "От Я до А", "msks"),
];

const MenuMUI = styled(Menu)({
  minWidth: "220px",
  maxHeight: "400px",
});
const ButtonMUI = styled(Button)(({ theme }) => ({
  maxWidth: "200px",
  color: "#AAAAAA",
  fontWeight: "500",
  fontFamily: "Roboto",
  background: "none",
  "&: hover": {
    background: "none",
  },
}));

const StyledMenu = styled((props: MenuProps) => (
  <MenuMUI
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    fontWeight: "400",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      padding: "5px 10px",
      "& .MuiSvgIcon-root": {
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const ProductType = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickMenu = () => setAnchorEl(null);
  return (
    <div>
      <ButtonMUI
        sx={{
          lineHeight: "100%",
          padding: "0px 0px",
          textTransform: "none",
          fontSize: "14px",
        }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}>
        Тип товара
        <Box sx={{ margin: " 0px 0px 5px 5px " }}>
          {open ? <DownArrowIcon /> : <UpArrowIcon />}
        </Box>
      </ButtonMUI>
      <StyledMenu
        id="ProductType"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {data.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => handleClickMenu()}
            disableRipple>
            {item.body}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default React.memo(ProductType);

// import * as React from "react";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// export default function ProductType() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? "basic-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         onClick={handleClick}>
//         Тип товара
//       </Button>
//       <Menu
//         id="ProductType"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}>
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }
