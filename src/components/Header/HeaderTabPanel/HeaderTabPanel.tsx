import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const HeaderTabPanel = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary">
        <Tab value="dsfa" label="Яндекс" to="/yandex" component={Link} />
        <Tab value="OZON" label="OZON" to="/ozon" component={Link} />
      </Tabs>
    </Box>
  );
};

export default React.memo(HeaderTabPanel);
