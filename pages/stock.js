import axios from "axios";
import Chart from "../components/Chart";
import newList from '../components/list';

const Stock = ({ stuff, ticker }) => {
  console.log(newList);
  return (
    <>
      <Chart data={stuff} ticker={ticker} />
    </>
  );
};
Stock.getInitialProps = async ({ query }) => {
  console.log(query.ticker);
  let res = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${query.ticker}&interval=15min&apikey=V6PMYFQGMDIY3Y1P`
  );
  const data = res.data;
  let xValue = [];
  let yValue = [];
  let stuff = [];
  for (let key in data["Time Series (15min)"]) {
    xValue.push(key);
    yValue.push(data["Time Series (15min)"][key]["4. close"]);
    stuff.push({ x: key, y: data["Time Series (15min)"][key]["4. close"] });
  }
  return { stuff: stuff, ticker: query.ticker };
};
export default Stock;
