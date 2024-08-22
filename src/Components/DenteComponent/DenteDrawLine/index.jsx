import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    plugins

} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

import { Line } from 'react-chartjs-2';

import style from "./index.module.css";

const DenteDrawLine = ({ valuePSCord1, valuePSCord2, valuePSCord3, valueMGCord1, valueMGCord2, valueMGCord3, graphicLineHeight }) => {
    const data = {
        labels: [ '', '', ''],
        datasets: [
            {
                label: 'Periodontal',
                data: [valuePSCord1, valuePSCord2, valuePSCord3],
                fill: true,
                backgroundColor: 'rgba(236, 85, 74, 0.4)',
                borderColor: "#EC554A",
                pointRadius: 0,
                tension: 0.6
            },
            {
                label: 'Periodontal',
                data: [valueMGCord1, valueMGCord2, valueMGCord3],
                fill: true,
                backgroundColor: 'rgba(82, 82, 162, 0.4)',
                borderColor: "#5252A2",
                pointRadius: 0,
                tension: 0.6
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
                beginAtZero: false,
                min: -18,
                max: 60
            },
        },
        plugins: {
            legend: {
                display: false
            }
        }
    };
    
    return (
        <Line data={data} options={options} className={ "position-absolute z-3"} style={{top: graphicLineHeight+"em"}}/>
    );
}

export default DenteDrawLine;