import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import UpArrowIcon from "assets/icon/UpArrowIcon";
import DownArrowIcon from "assets/icon/DownArrowIcon";
import { useAppDispatch } from "../../../hooks/useAppStore";
import { pushDataStockDays } from "store/reducers/booksSlice/booksSlice";

function createData(id: number, body: string) {
  return { id, body };
}
const data = [
  createData(
    1,
    "Lorem ipsum dolor sit amet, consectetur adidsfksdlfksd;fkskf;sf;lsdkfsdkf;lsd;lfsd",
  ),
  createData(2, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(3, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(4, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(5, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(6, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(7, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(8, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(9, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(10, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(11, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(12, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(13, "Lorem ipsum dolor sit amet, consectetur adi..."),
  createData(14, "Lorem ipsum dolor sit amet, consectetur adi..."),
];

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
  const dispatch = useAppDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickMenu = (id: number) => {
    dispatch(pushDataStockDays(id));
    setAnchorEl(null);
  };

  return (
    <div>
      <ButtonMUI
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}>
        Склад отгрузки
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
          <Box key={item.id}>
            <Tooltip title={item.body} placement="top-end">
              <MenuItem onClick={() => handleClickMenu(item.id)} disableRipple>
                {item.body}
              </MenuItem>
            </Tooltip>
          </Box>
        ))}
      </StyledMenu>
    </div>
  );
};

export default React.memo(HeaderMenu);
