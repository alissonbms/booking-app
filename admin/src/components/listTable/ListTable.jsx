import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../hooks/useFetch";

//Styles
import "./listTable.scss";

const ListTable = ({ email }) => {
  const { data, isFetching } = useFetch(
    `/api/transaction?${email ? `customerEmail=${email}&limit=5` : `limit=5`}`
  );

  return (
    <>
      {isFetching ? (
        <h1>Await</h1>
      ) : (
        <TableContainer className="table" component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">Tracking ID</TableCell>
                <TableCell className="tableCell">Customer</TableCell>
                <TableCell className="tableCell">Customer email</TableCell>
                <TableCell className="tableCell">Rooms of property</TableCell>
                <TableCell className="tableCell">Value payed</TableCell>
                <TableCell className="tableCell">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell className="tableCell">{row._id}</TableCell>
                  <TableCell className="tableCell">{row.customer}</TableCell>
                  <TableCell className="tableCell">
                    {row.customerEmail}
                  </TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <img src={row.propertyPhoto} alt={row.propertyName} />
                      {row.propertyName}
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">{row.valuePayed}</TableCell>
                  <TableCell className="tableCell">
                    {row.transactionMonth}/{row.transactionDay}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ListTable;
