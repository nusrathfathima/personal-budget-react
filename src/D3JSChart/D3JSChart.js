import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

const Arc = ({ data, index, createArc, colors, format }) => (
  <g key={index} className="arc">
    <path className="arc" d={createArc(data)} fill={colors(index)} />
    <text
      transform={`translate(${createArc.centroid(data)})`}
      textAnchor="middle"
      alignmentBaseline="middle"
      fill="white"
      fontSize="10"
    >
      {format(data.value)}
    </text>
  </g>
);

const D3JSChart = () => {
//     const generateData = (value, length = 5) =>
//     d3.range(length).map((item, index) => ({
//         date: index,
//         value: value === null || value === undefined ? Math.random() * 100 : value
//   }));
//   console.log(generateData());

  const inputValues = [
    {label: "A", value: 100},
    {label: "B", value: 200},
    {label: "C", value: 300},
    {label: "D", value: 400},
    {label: "E", value: 500},
  ]

//   const [inputData, setData] = useState(inputValues);

//   console.log(useState(inputValues));

//   useEffect(
//     () => {
//       setData(inputValues);
//     }
//     // [!inputData]
//   );

  const createPie = d3
    .pie()
    .value(d => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(100)
    .outerRadius(200);
  const colors = d3.scaleOrdinal(d3.schemeCategory10);
  const format = d3.format(".2f");
  const data = createPie(inputValues);

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
            format={format}
          />
        ))}
      </g>
    </svg>
  );
};

export default D3JSChart;
