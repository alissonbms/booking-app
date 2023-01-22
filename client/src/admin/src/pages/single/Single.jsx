import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//Styles
import "./single.scss";

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listTable/ListTable";

//Utilities
import { SidebarContext } from "../../../../contexts/SidebarContext";
import { UpdateContext } from "../../../../contexts/UpdateContext";
import { useEffect } from "react";

const Single = () => {
  const navigate = useNavigate();
  const { openSidebar } = useContext(SidebarContext);
  const { updateDispatch } = useContext(UpdateContext);

  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    const fetchWithCredentials = async () => {
      const response = await fetch(
        `https://abms-booking-app-api.onrender.com/api/user/${id}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      const result = await response.json();
      setData(result);
      setIsFetching(false);
    };

    fetchWithCredentials();
  }, []);

  const handleEdit = () => {
    updateDispatch({ type: "UPDATE", payload: { data } });
    navigate("/admin/user/new/");
  };

  return (
    <div className="single">
      {openSidebar ? <Sidebar /> : <></>}
      <div className="singleContainer">
        <Navbar />
        {isFetching ? (
          <h5>Please wait...</h5>
        ) : (
          <>
            <div className="top">
              <div className="left">
                <div className="editButton" onClick={handleEdit}>
                  Edit
                </div>
                <h1 className="title">Information</h1>
                <div className="item">
                  <img
                    src={data.photo}
                    alt={`${data.user} profile picture`}
                    className="itemImg"
                  />
                  <div className="details">
                    <h1 className="itemTitle">{data.username}</h1>
                    <div className="detailItem">
                      <span className="itemKey">Email:</span>
                      <span className="itemValue">{data.email}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Phone:</span>
                      <span className="itemValue">{data.phone}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Address:</span>
                      <span className="itemValue">{data.city}</span>
                    </div>
                    <div className="detailItem">
                      <span className="itemKey">Country:</span>
                      <span className="itemValue">{data.country}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right">
                <Chart
                  title="User Spending (Last 3 Months)"
                  aspect={4 / 1}
                  email={data.email}
                />
              </div>
            </div>
            <div className="bottom">
              <h1 className="title">Last Transactions</h1>
              <ListTable email={data.email} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Single;
