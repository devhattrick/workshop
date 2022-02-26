import React, { useEffect, useState, useRef } from "react";
import styles from "./index.module.scss";
import Button from "@mui/material/Button";
// import {
//   Chart as ChartJS,
//   defaults
// } from 'chart.js';
// import {
//   Chart
// } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
// import { Line,Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   BarController,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

const data = {
  labels: [
    "ST-1",
    "ST-2",
    "ST-3",
    "ST-4",
    "ST-5",
    "ST-6",
    "ST-7",
    "ST-8",
    "ST-9",
  ],
  datasets: [
    {
      label: "TEST A",
      data: [5, 2, 1, 2, 2.5, 4, 3, 5, 2],
      // type: 'line',
      // stack: 'combined',
      backgroundColor: " #00BDAE",
      borderColor: "rgb(255, 99, 132)",
    },
    {
      label: "TEST B",
      data: [1, 2, 7, 2, 7, 4, 3, 6, 9],
      // type: 'line',
      // stack: 'combined',
      backgroundColor: " #fb8b37",
      borderColor: "#059de1",
    },
  ],
};

interface Props {
  chartData?: any;
}

//* Line
export const LineChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="line" ref={chartRef} data={data} />;
};

//* Bar
export const BarChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="bar" ref={chartRef} data={data} />;
};

//* Pie
const dataPie = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
export const PieChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="pie" ref={chartRef} data={dataPie} />;
};

//* Doughnut 
const dataDoughnut = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
export const DoughnutChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="doughnut" ref={chartRef} data={dataDoughnut} />;
};

//* PolarArea
const dataPolarArea = {
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};
export const PolarAreaChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="polarArea" ref={chartRef} data={dataPolarArea} />;
};

//* RadarChart
const dataRadarChart = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

export const RadarChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="radar" ref={chartRef} data={dataRadarChart} />;
};

//* Bubble 
const dataBubble = {
  datasets: [
    {
    label: 'First Dataset',
    data: [{
      x: 235,
      y: 30,
      r: 15
    }, {
      x: 42,
      y: 15,
      r: 10
    }],
    backgroundColor: 'rgb(255, 99, 132)'
  },
    {
    label: '2 Dataset',
    data: [{
      x: 25,
      y: 20,
      r: 15
    }, {
      x: 40,
      y: 25,
      r: 10
    }],
    backgroundColor: '#1e7563'
  }
]
};
export const BubbleChart: React.FC<Props> = (props: Props): JSX.Element => {
  const chartRef = useRef();

  console.log("chartRef", chartRef);

  return <Chart type="bubble" ref={chartRef} data={dataBubble} />;
};
