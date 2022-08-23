import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from "chart.js";
import "../css/Body.css";
Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement 
)

const LineGraph = () => {

    const state = {
        type: "line",
        labels: ["","","","",""],
        datasets:  [
            {
                backgroundColor: "inherit",
                borderColor: "white",
                borderWidth:  2,
                pointRadius: 0,
                data: [3, 1, 5, 0, 5]
            }
        ]
    }

    return (
        <div className="linegraph">
            <Line
                data={state}
            />
        </div>
    )
}

export default LineGraph;