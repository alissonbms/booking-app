import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

//Styles
import "./datatable.scss";

const Datatable = ({ dataRows, dataColumns, title }) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      sortable: false,
      renderCell: () => {
        return (
          <div className="cellAction">
            {title === "Users" ? (
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
            ) : (
              <div className="viewButton">Edit</div>
            )}
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>{title}</h1>
        <Link
          to={title === "Users" ? "/users/new" : "/products/new"}
          className="addButton"
        >
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={dataRows}
        columns={dataColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
