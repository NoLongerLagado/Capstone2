import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register Chart.js components

const HorizontalBarChart = () => {
  // Data for the chart
  const data = {
    labels: [
      'Alaminos', 'Bay', 'Biñan', 'Cabuyao', 'Calamba',
      'Calauan', 'Cavinti', 'Famy', 'Kalayaan', 'Liliw',
      'Los Baños', 'Luisiana', 'Lumban', 'Mabitac',
      'Magdalena', 'Majayjay', 'Nagcarlan', 'Paete',
      'Pagsanjan', 'Pakil', 'Pangil', 'Pila', 'Rizal',
      'San Pablo', 'San Pedro', 'Santa Cruz', 'Santa Maria',
      'Santa Rosa', 'Siniloan', 'Victoria'
    ],
    datasets: [
      {
        label: 'Negative',
        data: [
          10000, 12000, 15000, 8000, 20000,
          7000, 4000, 5000, 10000, 8000,
          16000, 14000, 6000, 11000,
          9000, 12000, 17000, 13000,
          9000, 7000, 5000, 15000, 10000,
          30000, 25000, 18000, 9000,
          22000, 11000, 12000
        ],
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        stack: 'Stack 0',
      },
      {
        label: 'Neutral',
        data: [
          15000, 10000, 12000, 16000, 25000,
          15000, 10000, 12000, 9000, 13000,
          20000, 16000, 12000, 10000,
          17000, 18000, 21000, 14000,
          16000, 12000, 9000, 21000, 13000,
          35000, 20000, 19000, 15000,
          23000, 13000, 14000
        ],
        backgroundColor: 'rgba(255, 255, 159, 0.7)',
        stack: 'Stack 0',
      },
      {
        label: 'Positive',
        data: [
          10000, 15000, 10000, 30000, 5000,
          17000, 25000, 18000, 15000, 20000,
          12000, 16000, 19000, 18000,
          17000, 20000, 9000, 22000,
          14000, 30000, 18000, 10000, 9000,
          40000, 35000, 12000, 10000,
          16000, 19000, 21000
        ],
        backgroundColor: 'rgba(11, 156, 49, 0.4)',
        stack: 'Stack 0',
      }
    ]
  };

  // Options for the chart
  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
        max: 50000
      }
    }
  };

  return (
    <div>
      <h2>Horizontal Stacked Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;