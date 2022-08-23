import React from "react";
import "../css/grafik.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
const Grafik = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const labels = ["", "", "", "", "", "",];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: ["8", "1.", "7", "4", "9"],
        borderColor: "#F2F2F2",
        fill: true,
        backgroundColor: "#F2F2F2",
      },
    ],
  };

  return (

        <div style={{width:'190px',
                    height:'100px',
                    paddingTop:'20px',
                    paddingLeft:'85px'}}>
          <Line options={options} data={data} />
        </div>

  );
};

export default Grafik;