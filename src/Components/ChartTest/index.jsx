import style from "./index.module.css";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    plugins

  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  
  const ChartTest = () => {
    const data = {
      labels: [ '', '', '', '', '', '', '', '', ''],
      datasets: [
        {
          label: 'Periodontal',
          data: [3, 3, 1, 4, 3, 2, 3, 3, 2],
          fill: true,
          backgroundColor: 'rgba(236, 85, 74, 0.2)',
          borderColor: "#EC554A"
        },
        {
            label: 'Periodontal',
            data: [1, 2, -2, 0, -1, 0, 0, -2, 0],
            fill: true,
            backgroundColor: 'rgba(82, 82, 162, 0.2)',
            borderColor: "#5252A2"
        },
      ],
    };
  
    const options = {
      scales: {
        x: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            }
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                display: false
            },
            beginAtZero: true
        },
      },
      plugins: {
        legend: {
            display: false
        }
      }
    };
  
    return <Line data={data} options={options} className={ style.line_content + " position-absolute" } />;
  };
  
  export default ChartTest;
  