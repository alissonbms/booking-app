import { useContext } from "react";

//Styles
import "./home.scss";

//Components
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/listTable/ListTable";

//Utilities
import { SidebarContext } from "../../contexts/SidebarContext";

const Home = () => {
  const { openSidebar } = useContext(SidebarContext);
  return (
    <div className="home">
      {openSidebar ? <Sidebar /> : <></>}

      <div className="container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last six months (revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Last transactions</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
