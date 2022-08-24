import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { useAppDispatch } from "../../hooks/useAppStore";
import { useAppSelector } from "../../hooks/useAppStore";
import { getDataThunk } from "store/reducers/tableSlice/tableSliceAPI/tableSliceAPI";
import axios from "axios";

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
const TableRowUI = styled(TableRow)({
  "&::first-of-type": {
    borderTop: "1px solid white",
  },
  "&:last-child td, &:last-child th": {
    borderRight: "1px solid #AAAAAA",
    borderBottom: "none",
  },
});
const TableBlockTopLeftMUI = styled("div")({
  position: "fixed",
  background: "white",
  border: "none",
  paddingBottom: "30px",
  maxWidth: "551px",
});
const TableBlockLeftMUI = styled("div")({
  position: "fixed",
  background: "white",
  border: "none",
  borderRight: "2px solid grey",
  maxWidth: "551px",
});
const TableBlockRightMUI = styled("div")({
  marginLeft: "551px",
});

const Yandex = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => state.TABLE);
  React.useEffect(() => {
    dispatch(getDataThunk("Yandex"));
  }, []);

  const HandelTest = () => {
    axios
      .post("http://192.168.145.195:5998/api/table/upload/", {
        marketplace: "yandex",
        stock_days: "5",
        stock: "jiojio",
        table:
          "@Ozon-postavki-_-kopiya.xlsx;type=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
      .then((res) => console.log("response", res));
  };
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {error}
        <TableHead>
          <TableRow>
            <TableBlockTopLeftMUI>
              <TableCellUI>Артикул</TableCellUI>
              <TableCellUI>Тип Доставки</TableCellUI>
              <TableCellUI>Тип товара</TableCellUI>
              <TableCellUI>Название</TableCellUI>
              <TableCellUI>Штрихкод</TableCellUI>
            </TableBlockTopLeftMUI>
            <TableBlockRightMUI>
              <TableCellUI>Март</TableCellUI>
              <TableCellUI>Апрель</TableCellUI>
              <TableCellUI>Май</TableCellUI>
              <TableCellUI>Июнь</TableCellUI>
              <TableCellUI>Июль</TableCellUI>
              <TableCellUI>ABC Segment (beta)</TableCellUI>
              <TableCellUI>Продажи в текущем месяце</TableCellUI>
              <TableCellUI>Текущие продажи(F BO)</TableCellUI>
              <TableCellUI>
                Текущие
                <br />
                продажи(F
                <br />
                BS )
              </TableCellUI>
              <TableCellUI>Самара</TableCellUI>
              <TableCellUI>Остаток МСКС (шт)</TableCellUI>
              <TableCellUI>Остаток РЦ (шт)</TableCellUI>
              <TableCellUI>ADS</TableCellUI>
              <TableCellUI>Текущий IDC (по складу в днях)</TableCellUI>
              <TableCellUI>Стоимость поставки</TableCellUI>
              <TableCellUI>Стоимость корректировки</TableCellUI>
              <TableCellUI>Стоимость ручной поставки</TableCellUI>
              <TableCellUI>Цена Yandex</TableCellUI>
              <TableCellUI>Комментарии</TableCellUI>
            </TableBlockRightMUI>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.result.map((item) => (
            <TableRowUI
              key={item.vendor_code}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableBlockLeftMUI>
                <TableCellUI component="th" scope="item">
                  {item.vendor_code}
                </TableCellUI>
                <TableCellUI>{item.delivery_type}</TableCellUI>
                <TableCellUI>{item.product_type}</TableCellUI>
                <TableCellUI>{item.title}</TableCellUI>
                <TableCellUI>{item.barcode}</TableCellUI>
              </TableBlockLeftMUI>
              <TableBlockRightMUI>
                <TableCellUI align="right">{item.march}</TableCellUI>
                <TableCellUI align="right">{item.april}</TableCellUI>
                <TableCellUI align="right">{item.may}</TableCellUI>
                <TableCellUI align="right">{item.june}</TableCellUI>
                <TableCellUI align="right">{item.july}</TableCellUI>
                <TableCellUI align="right">{item.abc_segment}</TableCellUI>
                <TableCellUI align="right">{item.sales_month}</TableCellUI>
                <TableCellUI align="right">
                  {item.current_sales_fbo}
                </TableCellUI>
                <TableCellUI align="right">
                  {item.current_sales_fbs}
                </TableCellUI>
                <TableCellUI align="right">{item.samara}</TableCellUI>
                <TableCellUI align="right">{item.remainder_mckc}</TableCellUI>
                <TableCellUI align="right">{item.remainder_rc}</TableCellUI>
                <TableCellUI align="right">{item.ads}</TableCellUI>
                <TableCellUI align="right">{item.current_idc}</TableCellUI>
                <TableCellUI align="right">{item.delivery_cost}</TableCellUI>
                <TableCellUI align="right">{item.adjustment_cost}</TableCellUI>
                <TableCellUI align="right">
                  {item.manual_delivery_cost}
                </TableCellUI>
                <TableCellUI align="right">{item.shop_price}</TableCellUI>
                <TableCellUI align="right">{item.сomments}</TableCellUI>
              </TableBlockRightMUI>
            </TableRowUI>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(Yandex);
