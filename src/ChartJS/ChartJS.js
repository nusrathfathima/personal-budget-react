import React, { useEffect } from "react";
import Chart from "chart.js";
import { getChartData } from "../Axios/Axiosdata";

// import "./styles.css";

const data = {
  datasets: [
      {
          data: [1,2,3,4,5,6,7],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(75, 192, 192, 1)',
          ],
      }
  ],
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
}

export default function ChartJS() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");

    console.log(getChartData());

    new Chart(ctx, {
      type: "pie",
      data: data
      });
  });
  return (  
      <canvas id="myChart" width="400" height="400" />
  );
}
