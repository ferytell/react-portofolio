import React from 'react';

const Doughnut = ({ persentase, aktifitas }) => {
  const { value } = persentase;
  const {activity} = aktifitas;

  // Convert the percentage string to a number
  const percentage = parseFloat(value);

  // Calculate the strokeDasharray values
  const dashArrayValue = `${percentage} ${100 - percentage}`;


  return (
    <div className="svg-item">
      <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
        <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
        <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
        <circle className="donut-segment" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" strokeDasharray={dashArrayValue} strokeDashoffset="25"></circle>
        <g className="donut-text">
          <text y="50%" transform="translate(0, 2)">
            <tspan x="50%" textAnchor="middle" className="donut-percent">{value}</tspan>
          </text>
        </g>
      </svg>
      <h5>{activity}</h5>
    </div>
  );
};

export default Doughnut;