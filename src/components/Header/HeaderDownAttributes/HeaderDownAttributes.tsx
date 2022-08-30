// import React, { ChangeEvent } from "react";
// import { Box } from "@mui/system";
// import { IconButton } from "@mui/material";
// import DownloadIcon from "assets/icon/DownloadIcon";
// import { HeaderTypography } from "../style";
// import { useAppDispatch, useAppSelector } from "../../../hooks/useAppStore";
// import { webReshenieAxios } from "lib/http";
// import { getDataThunk } from "store/reducers/tableSlice/tableSliceAPI/tableSliceAPI";

// const IconSX = {
//   background: "#1976d2",
//   borderRadius: "4px",
//   "&:hover": {
//     background: "#0060c0",
//   },
// };

// const HeaderDownAttributes = () => {
//   const { marketplace, stock_days, stock, marketplace_stock } = useAppSelector(
//     (state) => state.BOOKS,
//   );
//   const dispatch = useAppDispatch();

//   const handleChengeInputFile = async (
//     event: ChangeEvent<HTMLInputElement>,
//   ) => {
//     const { files } = event.target;
//     console.log(files);

//     if (files?.length) {
//       const fileList: File[] = Array.from(files);
//       const formData = new FormData();
//       formData.append("marketplace", marketplace);
//       formData.append("stock_days", stock);
//       formData.append("our_stock", String(stock_days));
//       formData.append("marketplace_stock", marketplace_stock);
//       formData.append("stock_table", fileList[0]);
//       formData.append("products_table", fileList[0]);
//       //~~~~~~//
//       const response = await webReshenieAxios.post(
//         "/api/table/upload/",
//         formData,
//       );
//       // console.log(response.data);

//       dispatch(getDataThunk(response.data));
//     }
//   };

//   return (
//     <Box sx={{ display: "flex", alignItems: "center" }}>
//       <HeaderTypography>Остаток.xls</HeaderTypography>
//       <IconButton component="label" sx={IconSX}>
//         <input
//           hidden
//           accept=".xls*"
//           type="file"
//           onChange={handleChengeInputFile}
//         />
//         <DownloadIcon />
//       </IconButton>
//     </Box>
//   );
// };

// export default React.memo(HeaderDownAttributes);
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
  width: "120px",
  heigth: "20px",
  overflow: "hidden",
  "& > p": {
    overflow: "hidden",
    height: "20px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});
const HeaderDownAttributes = () => {
  const { setValue } = useFormContext();
  const [nameFile, setNameFile] = useState<string>("Атрибуты.xls");

  const handleChengeInputFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    console.log(files);
    if (files?.length) {
      const fileList: File[] = Array.from(files);
      setValue("products_table", fileList[0]);
      setNameFile(fileList[0].name);
    }
  };

  return (
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
  );
};

export default React.memo(HeaderDownAttributes);
