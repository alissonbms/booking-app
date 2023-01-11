import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  ResponsiveContainer,
  Area,
} from "recharts";

//Styles
import "./chart.scss";

//Utilities
import useFetch from "../../hooks/useFetch";

const Chart = ({ aspect, title, email }) => {
  const [thisM, setThisM] = useState("");
  const [lastM, setLastM] = useState("");
  const [lastLastM, setLastLastM] = useState("");

  const { data, isFetching } = useFetch(
    `https://abms-booking-app-api.vercel.app/api/transaction${
      email ? `?customerEmail=${email}` : ``
    }`
  );

  useEffect(() => {
    const getLastMonths = (n) => {
      const m = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const months = new Array();
      const today = new Date();
      let month = today.getMonth() + 1;

      let i = 0;
      do {
        months.push(m[parseInt((month > 9 ? "" : "0") + month)]);
        if (month == 1) {
          month = 12;
        } else {
          month--;
        }
        i++;
      } while (i < n);

      setThisM(months[0].toString());
      setLastM(months[1].toString());
      setLastLastM(months[2].toString());
    };

    getLastMonths(3);
  }, []);

  const thisMonth = data.filter(
    (transaction) => transaction.transactionMonth.toString() === thisM
  );
  const thisMonthValue = thisMonth.reduce(function (accumulator, curValue) {
    return accumulator + curValue.valuePayed;
  }, 0);
  //

  const lastMonth = data.filter(
    (transaction) => transaction.transactionMonth.toString() === lastM
  );
  const lastMonthValue = lastMonth.reduce(function (accumulator, curValue) {
    return accumulator + curValue.valuePayed;
  }, 0);
  //

  const lastLastMonth = data.filter(
    (transaction) => transaction.transactionMonth.toString() === lastLastM
  );
  const lastLastMonthValue = lastLastMonth.reduce(function (
    accumulator,
    curValue
  ) {
    return accumulator + curValue.valuePayed;
  },
  0);

  const chartData = [
    { name: lastLastM, Total: lastLastMonthValue },
    { name: lastM, Total: lastMonthValue },
    { name: thisM, Total: thisMonthValue },
  ];

  return (
    <div className="chart">
      <div className="chartTitle">
        <h2>{title}</h2>
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
