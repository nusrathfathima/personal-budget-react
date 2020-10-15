import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import axios from "axios";

const Arc = ({ data, index, createArc, colors, label }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {label}
    </text>
  </g>
);
const D3JSChart = () => {

  const test_data = [
    {label: "A", value: 100},
    {label: "B", value: 200},
    {label: "C", value: 300},
    {label: "D", value: 400},
    {label: "E", value: 500},
    {label: "F", value: 600},
    {label: "G", value: 700},
  ]

  axios({
    method: "get",
    url: "http://localhost:4000/budget",
  }).then(response => {
    var inputValues = [];
    for (var i = 0; i<response.data.myBudget.length; i++) {
      inputValues.push( 
        {
          label: response.data.myBudget[i].title,
          value: response.data.myBudget[i].budget
        })
    }
  })
  .catch(error => {
    console.log(error);
  });

  const createPie = d3
  .pie()
  .value(d => d.value)
  .sort(null);
  const createArc = d3
  .arc()
  .innerRadius(100)
  .outerRadius(200);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const data = createPie(test_data);

  return (
    <svg width={200} height={200}>
      <g transform={`translate(${200} ${200})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            label={d.data.label}
          />
        ))}
      </g>
    </svg>
  );
};

export default D3JSChart;
