import axios from "axios";


export const getChartData = () => {
  var data = {};
  axios({
    method: "get",
    url: "http://localhost:4000/budget",
  }).then(response => {
    console.log(response.data);
    data = response.data;
  })
  .catch(error => {
    console.log(error);
  });
  return data;
};