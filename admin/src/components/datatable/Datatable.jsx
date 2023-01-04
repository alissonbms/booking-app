import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
//Styles
import "./datatable.scss";
import { useContext, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { UpdateContext } from "../../contexts/UpdateContext";

const Datatable = ({ title, columns }) => {
  const navigate = useNavigate();
  const alert = useAlert();
  const location = useLocation();
  const { updateDispatch } = useContext(UpdateContext);
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, isFetching, reFetch } = useFetch(`/api/${path}`);

  useEffect(() => {
    reFetch(`/api/${location.pathname.split("/")[1]}`);
  }, [path]);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios
        .delete(`/api/${path}/${id}`)
        .then(alert.success(`${path} deleted successfully!`));
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteRoom = async (id) => {
    const response = await axios
      .get(`/api/property/findByRoom?id=${id}`)
      .then(alert.success("Room deleted successfully!"));
    const property = response.data[0];

    try {
      await axios.delete(`/api/${path}/${property._id}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleNew = () => {
    updateDispatch({ type: "NOT_UPDATE" });
    navigate(`/${path}/new`);
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.get(
        path === "property" ? `api/property/find/${id}` : `api/room/${id}`
      );
      const data = response.data;
      updateDispatch({ type: "UPDATE", payload: { data } });
    } catch (error) {
      console.log(error);
    } finally {
      navigate(`/${path}/new`);
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {path === "user" ? (
              <Link
                to={`/user/${params.row._id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="viewButton">View</div>
              </Link>
            ) : (
              <div
                className="viewButton"
                onClick={() => handleUpdate(params.row._id)}
              >
                Edit
              </div>
            )}

            <div
              className="deleteButton"
              onClick={
                path === "room"
                  ? () => handleDeleteRoom(params.row._id)
                  : () => handleDelete(params.row._id)
              }
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {isFetching ? (
        <h2>Await</h2>
      ) : (
        <>
          <div className="datatableTitle">
            <h1>{title}</h1>
            <button onClick={handleNew} className="addButton">
              Add new
            </button>
          </div>

          <DataGrid
            className="datagrid"
            rows={list}
            columns={columns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            getRowId={(row) => row._id}
          />

          <h3 className="total">Total: {list.length}</h3>
        </>
      )}
    </div>
  );
};

export default Datatable;
