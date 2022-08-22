import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

const HeaderTabPanel = () => {
  const [value, setValue] = React.useState("yandex");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab
        value="yandex"
        label="Яндекс"
        to="/yandex"
        component={Link}
        sx={{ fontWeight: "500", fontSize: "16px" }}
      />
      <Tab
        value="ozon"
        label="OZON"
        to="/ozon"
        component={Link}
        sx={{ fontWeight: "500", fontSize: "16px" }}
      />
    </Tabs>
  );
};

export default React.memo(HeaderTabPanel);
