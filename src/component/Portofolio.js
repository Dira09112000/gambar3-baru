import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, tooltip,CategoryScale, LinearScale, PointElement, LineElement, Filler } from "chart.js";
import "../css/Portofolio.css";

ChartJS.register(
    CategoryScale, LinearScale, PointElement, Title, LineElement, Filler,
)

const PortGraph = () => {
    const ctx = document.getElementById("canvas").getContext("2d");
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 600);
    gradientBg.addColorStop(0, "rgba(53, 124, 60, 0.5)");
    gradientBg.addColorStop(0.6, "rgba(0, 0, 0, 0)");

    const porto = {
        type: "line",
        labels: ["21 Feb", "22 Feb", "23 Feb", "24 Feb", "25 Feb", "26 Feb", "27 Feb", "28 Feb", "1 Mar", "2 Mar", "3 Mar", "4 Mar", "5 Mar", "6 Mar", "7 Mar"],
        datasets:  [
            {
                label: "BTC",
                backgroundColor: gradientBg,
                borderColor: "lime",
                borderWidth:  2,
                pointRadius: 0.1,
                hoverRadius: 10,
                fill: true,
                data: [49, 43, 45, 32, 30, 38, 39, 41, 48, 36, 33, 46, 42, 45, 38]
            },
            {  
                label: "ETH",
                borderColor: "blue",
                borderWidth:  2,
                pointRadius: 0.1,
                hoverRadius: 10,
                data: [30, 28, 24, 20, 22, 23, 29, 31, 33, 34, 25, 27, 35, 26, 21],
            },
            {
                label: "LTC",
                borderColor: "purple",
                borderWidth:  2,
                pointRadius: 0.1,
                hoverRadius: 10,
                data: [19, 21, 20, 19, 21, 20, 24, 16, 21, 19, 23, 16, 21, 20, 17],
            },
            {
                label: "Dogecoin",
                borderColor: "orange",
                borderWidth:  2,
                pointRadius: 0.1,
                hoverRadius: 10,
                data: [17, 15, 19, 13, 18, 10, 19, 20, 16, 20, 11, 14, 14, 13, 16],
            },
            {
                label: "BNB",
                borderColor: "#277BC0",
                borderWidth:  2,
                pointRadius: 0.1,
                hoverRadius: 10,
                data: [9, 7, 9, 10, 6, 5, 13, 15, 8, 5, 8, 9, 9, 10, 7],
            }
        ]
    }

    const options = {
        plugins:{
            legend:{
                display:false
            }
        },
        scales: {
            x: {
                grid: {
                    borderDash: [5, 5],
                    color: "rgba(115, 119, 123, 0.3)"
                }
            },
            y: {
                grid: {
                    borderDash: [5, 5],
                    color: "rgba(115, 119, 123, 0.3)"
                }
            },

        }
    }

    return (
        <div className="portgraph">
            <Line
                data={porto}
                options={options}
            />
        </div>
    )
}

export default PortGraph;