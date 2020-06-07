import React, { useState } from "react";
import axios from "axios";
import { ResponsiveLine } from "@nivo/line";
import Chart from "../components/Chart";
import Link from "next/link";

const Index = ({ posts, price }) => {
  const [count, setCount] = useState(0);
  const createData = () => {
    let arr = [];
    for (let i = 0; i < posts.length; i++) {
      let uiui = { x: posts[i], y: price[i] };
      arr.push(uiui);
    }
    return arr;
  };
  let datas = [
    {
      id: "IBM",
      data: createData(),
    },
  ];
  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>

      <Link href={`/stock?ticker=ACB`}>
        <a>Welp</a>
      </Link>
    </>
  );
};
Index.getInitialProps = async () => {
  let res = await axios.get(
    "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=ACB&interval=15min&apikey=V6PMYFQGMDIY3Y1P"
  );
  //console.log(res);
  const data = res.data;
  let xValue = [];
  let yValue = [];
  for (let key in data["Time Series (15min)"]) {
    xValue.push(key);
    yValue.push(data["Time Series (15min)"][key]["4. close"]);
  }

  return { posts: xValue, price: yValue };
};
export default Index;
