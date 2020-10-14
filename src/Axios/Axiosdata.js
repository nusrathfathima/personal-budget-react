import axios from "axios";


export const getChartData = () => {
  return axios({
    method: "get",
    url: "/server",
  });
};