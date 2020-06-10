import axios from "axios";
import Chart from "../components/Chart";

const Stock = ({ stuff, ticker, name}) => {
  return (
    <>
      <h2>Intraday-graph(15mins) of {name}</h2>
      <Chart data={stuff} ticker={ticker} />
    </>
  );
};
Stock.getInitialProps = async ({ query }) => {
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
  return { stuff: stuff, ticker: query.ticker, name:query.name };
};
export default Stock;
