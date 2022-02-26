import React,{useEffect, useState} from 'react'
import styles from './index.module.scss'
import Button from '@mui/material/Button';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  chartData?:any
}
const BarChart: React.FC<Props> = (props:Props): JSX.Element => {
  const [open,setOpen] =useState<boolean>(false)
const [chartData,setChartData] =useState<any>()
const chart = () =>{
  setChartData({
    labels: ['ST-1', 'ST-2', 'ST-3', 'ST-4', 'ST-5', 'ST-6', 'ST-7', 'ST-8', 'ST-9'],
    datasets: [
      {
        label: 'TEST A',
        data: [5, 3, 1, 2, 2.5, 4, 3, 5, 2],
        // type: 'line',
        // stack: 'combined',
        backgroundColor: ' #00BDAE',
        borderColor: 'rgb(255, 99, 132)',
      },
  
    ],
  })
}
useEffect(() => {
  setInterval(() => {
    console.log('555')
  },1000)
  chart()
  console.log('1')
},[
  setInterval(() => {
    // console.log('555')
  },1000)
])
// console.log('chartData',chartData)

const data ={
  labels: ['ST-1', 'ST-2', 'ST-3', 'ST-4', 'ST-5', 'ST-6', 'ST-7', 'ST-8', 'ST-9'],
    datasets: [
      {
        label: 'TEST A',
        data: [5, 3, 1, 2, 2.5, 4, 3, 5, 2],
        // type: 'line',
        // stack: 'combined',
        backgroundColor: ' #00BDAE',
        borderColor: 'rgb(255, 99, 132)',
      },
  
    ],
}
  return  <Line data={chartData} />
    
   
  
}
export default BarChart