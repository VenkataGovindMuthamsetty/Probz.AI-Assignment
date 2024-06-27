import React, { Component } from "react";
import TimeframeSelector from "../TimeframeSelector";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    timestamp: "2023-01-01T00:00:00Z",
    value: 10
  },
  {
    name: "Page B",
    timestamp: "2023-01-02T00:00:00Z", 
    value: 12 
  },
  {
    name: "Page C",
    timestamp: "2023-01-03T00:00:00Z", 
    value: 5
  },
  {
    name: "Page D",
    timestamp: "2023-01-04T00:00:00Z", 
    value: 15
  },
  {
    name: "Page E",
    timestamp: "2023-01-05T00:00:00Z", 
    value: 20
  },
  {
    name: "Page F",
    timestamp: "2023-01-06T00:00:00Z", 
    value: 13
  },
  {
    name: "Page G",
    timestamp: "2023-01-07T00:00:00Z", 
    value: 9
  },
];

class Chart extends Component{
  render(){
    return (
      <BarChart
        width={100%}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip shared={false} trigger="click" />
        <Legend />
        <Bar dataKey="timestamp" fill="#8884d8" />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>

    );
  }
  <TimeframeSelector/>
  
}
export default Chart