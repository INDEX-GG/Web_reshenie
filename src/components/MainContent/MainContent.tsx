import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

import { useAppSelector } from "../../hooks/useAppStore";
import { MainContentObj } from "./MainContentObj";
import MainContentItem from "./MainContentItem";
import { Box } from "@mui/material";

const MainContent = () => {
  const { data, error } = useAppSelector((state) => state.TABLE);

  return (
    <>
      {data.result.length > 1 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            {error}
            <TableHead>
              <TableRow>
                {MainContentObj.map((title, index) => (
                  <TableCellUI key={index}>{title}</TableCellUI>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.result.map((rowItem, index) => (
                <>
                  <MainContentItem
                    key={rowItem.vendor_code}
                    index={index}
                    rowItem={rowItem}
                  />
                </>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

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

export default React.memo(MainContent);
