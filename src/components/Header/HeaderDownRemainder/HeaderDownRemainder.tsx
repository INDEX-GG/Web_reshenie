import React, { ChangeEvent, useState } from "react";
import { Box } from "@mui/system";
import { IconButton, styled } from "@mui/material";
import DownloadIcon from "assets/icon/DownloadIcon";
import { HeaderTypography } from "../style";
import { useFormContext } from "react-hook-form";

const IconSX = {
  background: "#1976d2",
  borderRadius: "4px",
  "&:hover": {
    background: "#0060c0",
  },
};
const ContainerTitleMUI = styled("div")({
  width: "125px",
  overflow: "hidden",
  marginLeft: "15px",
  "& > p": {
    overflow: "hidden",
    height: "25px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

const HeaderDownRemainder = () => {
  const { setValue } = useFormContext();
  const [nameFile, setNameFile] = useState<string>("Остаток.xls");

  const handleChengeInputFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    if (files?.length) {
      const fileList: File[] = Array.from(files);
      setValue("stock_table", fileList[0]);
      setNameFile(fileList[0].name);
    }
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ContainerTitleMUI>
          <HeaderTypography>{nameFile}</HeaderTypography>
        </ContainerTitleMUI>
        <IconButton component="label" sx={IconSX}>
          <input
            hidden
            accept=".xls*"
            type="file"
            onChange={handleChengeInputFile}
          />
          <DownloadIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default React.memo(HeaderDownRemainder);
