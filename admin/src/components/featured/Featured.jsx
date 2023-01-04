import MoreVertIcon from "@mui/icons-material/MoreVert";
import useFetch from "../../hooks/useFetch";
//Sytles
import "./featured.scss";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "../progressBar/ProgressBar";
import { useEffect } from "react";
import { useState } from "react";

const Featured = () => {
  const [today, setToday] = useState();
  const { data, isFetching } = useFetch(`/api/transaction`);

  useEffect(() => {
    const madeToday = async () => {
      const dayNumber = await new Date().getDate();
      setToday(dayNumber.toString());
    };

    madeToday();
  }, []);

  const totalEarnings = data.reduce(function (accumulator, curValue) {
    return accumulator + curValue.valuePayed;
  }, 0);

  const transactionsToday = data.filter(
    (transaction) => transaction.transactionDay.toString() === today
  );

  const salesToday = transactionsToday.reduce(function (accumulator, curValue) {
    return accumulator + curValue.valuePayed;
  }, 0);

  return (
    <div className="featured">
      <div className="top">
        <h2 className="titleh1">Total revenue</h2>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <p className="title">Percentage of rooms reserved</p>
        <div className="featuredChart">
          <ProgressBar />
        </div>
        <div className="amounts">
          <div>
            <p className="title">Total sales made today</p>
            <p className="amount">${salesToday}</p>
          </div>
          <div>
            <p className="title">Total earnings so far</p>
            <p className="amount">${totalEarnings}</p>
          </div>
        </div>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
      </div>
    </div>
  );
};

export default Featured;
