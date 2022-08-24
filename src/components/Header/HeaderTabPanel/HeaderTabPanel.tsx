import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/useAppStore";
import { pushDataMarketplace } from "store/reducers/booksSlice/booksSlice";

const HeaderTabPanel = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState("yandex");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    dispatch(pushDataMarketplace(newValue));
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab
        value="yandex"
        label="Яндекс"
        to="/yandex"
        component={Link}
        sx={{ fontWeight: "600", fontSize: "16px" }}
      />
      <Tab
        value="ozon"
        label="OZON"
        to="/ozon"
        component={Link}
        sx={{ fontWeight: "600", fontSize: "16px" }}
      />
    </Tabs>
  );
};

export default React.memo(HeaderTabPanel);
