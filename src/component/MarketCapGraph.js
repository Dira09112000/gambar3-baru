import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import "../css/Body.css";
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement 
)

const LineGraph = () => {
    const option = {
        plugins:{
            legend:{
                display:false
            }
        }
    }

    const state = {
        type: "line",
        labels: ["","","","",""],
        datasets:  [
            {
                backgroundColor: "inherit",
                borderColor: "white",
                borderWidth:  2,
                pointRadius: 0,
                data: ["48", "1", "30", "2", "48","3","35","4","30"]
            }
        ]
    }

    return (
        <div className="linegraph">
            <Line
                data={state} options={option}
            />
        </div>
    )
}

export default LineGraph;