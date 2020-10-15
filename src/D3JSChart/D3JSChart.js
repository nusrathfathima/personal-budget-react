import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import axios from "axios";

const D3JSChart = () => {
  const d3jsChart = useRef(null);

  const width = 250;
  const height = 250;
  const radius = Math.min(width, height);

  const getData = () => {
    axios({
      method: "get",
      url: "http://localhost:4000/budget",
    }).then((response) => {
      createChart(response.data.myBudget);
    });
  };

  const createChart = (data) => {
    let colors = d3
      .scaleOrdinal()
      .range([
        '#ffcd56',
        '#ff6384',
        '#36a2eb',
        '#fd6b19',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)',
      ]);
    let pie = d3.pie().value((d) => d.budget)(data);

    var innerArc = d3
      .arc()
      .outerRadius(radius * 0.7)
      .innerRadius(radius * 0.4);

    var outerArc = d3
      .arc()
      .outerRadius(radius * 0.8)
      .innerRadius(radius * 0.8);

    var svg = d3
      .select(d3jsChart.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width}, ${height})`);

    svg
      .selectAll("pieSlices")
      .data(pie)
      .enter()
      .append("path")
      .attr("d", innerArc)
      .attr("fill", (d) => colors(d.data.title))
      .attr("stroke", "white");

    svg
      .selectAll("pieLabels")
      .data(pie)
      .enter()
      .append("text")
      .text((d) => d.data.title)
      .attr("text-anchor", "end")
      .attr("font-size", 11)
      .attr("font-weight", "bold")
      .attr("transform", (d) => {
        var pos = outerArc.centroid(d);
        return `translate(${pos})`;
      })
  };

  useEffect(() => {
    getData();
  });

  return <figure style={{height: 500}} ref={d3jsChart}></figure>;
};

export default D3JSChart;