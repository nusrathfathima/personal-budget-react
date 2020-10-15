import React, { useEffect } from "react";
import Chart from "chart.js";
// import myBudget from "../../server/myBudget";
// import { getChartData } from "../Axios/Axiosdata";
import axios from "axios";


// import "./styles.css";
const data = {
  datasets: [
      {
          // data: [1,2,3,4,5,6,7],
          data: [],
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
  labels: []
  // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
}

export default function ChartJS() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");

    axios({
      method: "get",
      url: "http://localhost:4000/budget",
    }).then(response => {
      for (var i = 0; i<response.data.myBudget.length; i++) {
        data.datasets[0].data[i] = response.data.myBudget[i].budget;
        data.labels[i] = response.data.myBudget[i].title;
      }
      new Chart(ctx, {
        type: "pie",
        data: data
      });
    })
    .catch(error => {
      console.log(error);
    });
    
  });
  return (  
      <canvas id="myChart" width="500" height="500" />
  );
}
