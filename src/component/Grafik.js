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
        display:false
      },
      title: {
        display: false,
        text: "",
      },
    },
  };

  const labels = ["", "", "", "", "", "","","",""];

  const data = {
    labels,
    datasets: [
      {
        pointRadius:0,
        label: "",
        data: ["48", "1", "30", "2", "48","3","35","4","30"],
        borderColor: "#F2F2F2",
        fill: false,
        backgroundColor: "#F2F2F2",
      },
    ],
  };

  return (

        <div style={{width:'100%',
                    // height:'200px',
                    paddingTop:'30px',
                    paddingLeft:'95px'}}>
          <Line options={options} data={data} />
        </div>

  );
};

export default Grafik;