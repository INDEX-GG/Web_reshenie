import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import UpArrowIcon from "assets/icon/UpArrowIcon";
import DownArrowIcon from "assets/icon/DownArrowIcon";
import { useAppDispatch } from "../../../hooks/useAppStore";
import { useFormContext } from "react-hook-form";

function createData(id: number, body: string, title: string) {
  return { id, body, title };
}
const data = [createData(1, "РЦ", "rc"), createData(2, "МСКС", "msks")];

const MenuMUI = styled(Menu)({
  maxWidth: "400px",
  maxHeight: "400px",
});
const MenuItemMUI = styled(MenuItem)({});
const ButtonMUI = styled(Button)(({ theme }) => ({
  color: "#AAAAAA",
  fontWeight: "500",
  fontSize: "15px",
  fontFamily: "Roboto",
  background: "none",
  "&: hover": {
    background: "none",
  },
  [theme.breakpoints.down(1400)]: {
    fontSize: "14px",
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
    minWidth: 180,
    fontWeight: "400",
    fontSize: "16px",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
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
  [theme.breakpoints.between(0, 1400)]: {
    "& .MuiPaper-root": {
      fontSize: "14px",
    },
  },
}));

const HeaderMenu = () => {
  const [titleMenu, setTitleMenu] = useState<string>("Склад отгрузки");
  const { register, setValue } = useFormContext();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickMenu = (title: string, body: string) => {
    setValue("our_stock", title);
    setTitleMenu(body);
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonMUI
        sx={{ width: "177px", padding: "0px 0px" }}
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}>
        {titleMenu}
        <Box sx={{ margin: " 0px 0px 5px 5px " }}>
          {open ? <UpArrowIcon /> : <DownArrowIcon />}
        </Box>
      </ButtonMUI>
      <StyledMenu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {data.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => handleClickMenu(item.title, item.body)}
            disableRipple>
            {item.body}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default React.memo(HeaderMenu);
