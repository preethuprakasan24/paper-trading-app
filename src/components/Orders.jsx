import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

function createData(tradeid, filltime, type, instrument, product, qty, price) {
  return { tradeid, filltime, type, instrument, product, qty, price };
}

const rows = [
  createData(54163672, "13:56:56", "sell", "PNB NSE", "CNC", 1, 50.4),
  createData(54163673, "14:00:00", "buy", "TCS NSE", "CNC", 2, 3200.0),
  createData(54163674, "14:15:30", "sell", "INFY NSE", "CNC", 5, 1600.5),
  createData(54163675, "15:00:00", "buy", "RELIANCE NSE", "CNC", 10, 2000.0),
];

function Orders() {
  return (
    <div className="container-fluid mt-5 shadow">
      <div className="mb-3">
        <h4>Trades ({rows.length})</h4>
      </div>
      <TableContainer component={Paper} style={{ backgroundColor: "#272b30" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" className="text-light">
                Trade ID
              </TableCell>
              <TableCell align="right" className="text-light">
                Fill time
              </TableCell>
              <TableCell align="right" className="text-light">
                Type
              </TableCell>
              <TableCell align="right" className="text-light">
                Instrument
              </TableCell>
              <TableCell align="right" className="text-light">
                Product
              </TableCell>
              <TableCell align="right" className="text-light">
                Qty.
              </TableCell>
              <TableCell align="right" className="text-light">
                Avg. Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.tradeid}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right" className="text-light">
                  {row.tradeid}
                </TableCell>
                <TableCell align="right" className="text-light">
                  {row.filltime}
                </TableCell>
                <TableCell align="right" >
                  <Button
                    variant="outlined"
                    color={row.type === "buy" ? "primary" : "secondary"}
                  >
                    {row.type}
                  </Button>
                </TableCell>
                <TableCell align="right" className="text-light">
                  {row.instrument}
                </TableCell>
                <TableCell align="right" className="text-light">
                  {row.product}
                </TableCell>
                <TableCell align="right" className="text-light">
                  {row.qty}
                </TableCell>
                <TableCell align="right" className="text-light">
                  {row.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Orders;
