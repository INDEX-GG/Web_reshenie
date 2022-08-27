import { styled, TableCellProps, TextField } from "@mui/material";
import React, { useState } from "react";
import { IdataItem } from "types/types";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

interface IMainContentSubtitleProps {
  value: string | number;
  rowItem: IdataItem;
  TableCellProps?: TableCellProps;
}

const MainContentSubtitle = ({
  value,
  rowItem,
  TableCellProps = {},
}: IMainContentSubtitleProps) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleChangeMode = () => {
    console.log(rowItem);
    setIsEditMode((prevState) => !prevState);
  };

  const handleDisableEditMode = () => {
    setIsEditMode(false);
  };

  return (
    <TableCellUI {...TableCellProps} onClick={handleChangeMode}>
      {isEditMode ? (
        <InputUI
          value={value}
          autoFocus={true}
          onBlur={handleDisableEditMode}
        />
      ) : (
        value
      )}
    </TableCellUI>
  );
};

const InputUI = styled(TextField)`
  height: "50px";
`;

const TableCellUI = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    color: "#AAAAAA",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    padding: "0px",
    textAlign: "center",
    borderBottom: "1px solid white",
    minWidth: "110px",
    maxWidth: "170px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "14px",
    borderRight: "1px solid #AAAAAA",

    minWidth: "110px",
    maxWidth: "170px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    padding: " 12px 5px 4px",
  },
});

export default MainContentSubtitle;
