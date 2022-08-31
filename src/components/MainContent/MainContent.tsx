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
import MainContentItem from "./MainContentItem";
import { CircularProgress } from "@mui/material";

const MainContent = () => {
  const { data, error } = useAppSelector((state) => state.TABLE);
  console.log(data);
  const newMonths: string[] =
    "months" in data
      ? data?.months.map((item) => {
          switch (item) {
            case 1:
              return "Январь";
            case 2:
              return "Февраль";
            case 3:
              return "Март";
            case 4:
              return "Апрель";
            case 5:
              return "Май";
            case 6:
              return "Июнь";
            case 7:
              return "Июль";
            case 8:
              return "Август";
            case 9:
              return "Сентябрь";
            case 10:
              return "Октябрь";
            case 11:
              return "Ноябрь";
            case 12:
              return "Декабрь";
            default:
              return "";
          }
        })
      : [];

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {error}
          <TableHead sx={{ sxTableHead }}>
            <TableRow>
              <TableCellMUI>Артикул</TableCellMUI>
              <TableCellMUI>Тип Доставки</TableCellMUI>
              <TableCellMUI>Тип товара</TableCellMUI>
              <TableCellMUI>Название</TableCellMUI>
              <TableCellMUI>Штрихкод</TableCellMUI>
              {newMonths?.map((month, index) => (
                <TableCellMUI key={index}>{month}</TableCellMUI>
              ))}
              <TableCellMUI>ABC Segment (beta)</TableCellMUI>
              <TableCellMUI>Продажи в текущем месяце</TableCellMUI>
              <TableCellMUI>Текущие продажи(FBO)</TableCellMUI>
              <TableCellMUI>Текущие продажи(FBS)</TableCellMUI>
              <TableCellMUI>Самара</TableCellMUI>
              <TableCellMUI>Остаток МСКС (шт)</TableCellMUI>
              <TableCellMUI>Остаток РЦ (шт)</TableCellMUI>
              <TableCellMUI>ADS</TableCellMUI>
              <TableCellMUI>Текущий IDC (по складу в днях)</TableCellMUI>
              <TableCellMUI>Умный заказ, шт. (авто-чески)</TableCellMUI>
              <TableCellMUI>Умный заказ, шт. (Корректировка)</TableCellMUI>
              <TableCellMUI>Ручная поставка</TableCellMUI>
              <TableCellMUI>Цена</TableCellMUI>
              <TableCellMUI>Комментарии</TableCellMUI>
              <TableCellMUI>Стоимость поставки</TableCellMUI>
              <TableCellMUI>Стоимость корректировки</TableCellMUI>
              <TableCellMUI>Стоимость ручной поставки</TableCellMUI>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(data.result) &&
              data.result.map((rowItem, index) => (
                <MainContentItem
                  key={rowItem.vendor_code}
                  index={index}
                  rowItem={rowItem}
                />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {"status" in data.result && data.result.status && (
        <CircularProgress
          sx={{
            position: "relative",
            top: "0%",
            left: "50%",
            marginTop: "20%",
          }}
        />
      )}
    </>
  );
};
const sxTableHead = {
  position: "fixed",
};
const TableCellMUI = styled(TableCell)({
  [`&.${tableCellClasses.head}`]: {
    color: "#AAAAAA",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "100%",
    padding: "0px 5px 0px",
    textAlign: "center",
    borderBottom: "1px solid white",
  },
});

export default React.memo(MainContent);
