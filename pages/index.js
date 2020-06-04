import React,{useState} from 'react';
import axios from "axios";

const Index = ({posts,price}) => {
    const [count,setCount] = useState(0);
    return (
        <>
    <h1 onClick= {() => setCount(count + 1)}>{count}</h1>
          <ul>  {posts.map(post =>
                    <li>{post}</li>
                )}
            </ul>
            <ul>  {price.map(post =>
                    <li>{post}</li>
                )}
            </ul>
        </>
    )
}
Index.getInitialProps = async () => {
let res = await axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=15min&apikey=V6PMYFQGMDIY3Y1P");
//console.log(res);
const data = res.data
let xValue =[];
let yValue =[];
for(let key in data['Time Series (15min)']){
    xValue.push(key);
    yValue.push(data['Time Series (15min)'][key]['4. close']);
}

return {posts: xValue, price: yValue};
}
export default Index;