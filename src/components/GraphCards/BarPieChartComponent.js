import React from 'react';
import { PieChart,Pie  } from 'recharts'
import './BarPieChartComponent.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  
);
const BarPieChartComponent = () => {
  const options = {
    responsive: true,
   borderRadius:10,
   height:2,
    scales: {
      y: {
        display:false,
        grid:{
          display:false,
          drawTicks:false
        }
        
      },
    },
    x:{
     
      
     
    },
    
  };
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug','sep','oct','nov','dec'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:  [12, 19, 3, 5, 2, 3,10, 11,15,20,12,11],
        backgroundColor: 'rgba(198, 155, 250, 0.5)', // Light purple
        hoverBackgroundColor: 'rgba(128, 0, 128, 1)',
        
      },
    ],
  };

  const data01 = [
    {
      "name": "Group A",
      "value": 40
    },
    {
      "name": "Group B",
      "value": 30
    },
    {
      "name": "Group C",
      "value": 30
    },
    
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 240
    },
    {
      "name": "Group B",
      "value": 456
    },
    {
      "name": "Group C",
      "value": 139
    },
    
  ];
      
  
  return (
   <div className='chart-cards'>
     <div className="chart-card">
    <div className="card-header">
      <div className="title">Overview</div>
      <select className="options">
        <option>Quarterly</option>
        <option>Half Yearly</option>
        <option>Monthly</option>
        <option>Annually</option>
      </select>
    </div>
    <div className="chart">
    <Bar options={options} data={data} />;
    </div>
  </div>
  <div className="pie-chart-card">
    <div className="pie-chart">
      <p className='text'>Customers</p>
      <p className='content-title'>Customersthat buy product</p>
    <PieChart width={250} height={250}>
        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={40} fill="#8884d8" />
        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#82ca9d" label />
    </PieChart>

    </div>
  </div>
  </div>
  );
};

export default BarPieChartComponent;
