import React from "react";
import {PieChart} from "react-minimal-pie-chart";

function LoadingCircleGithub() {
  return (
    <div>
      <PieChart
       data={[{ value:50, key: 1, color: '#4bd6e9' }]}
        lineWidth={15}
        background="#3c3c3c"
        startAngle={270}
        lengthAngle={360}
        reveal={50}
        label={({ dataEntry }) => dataEntry.value +'%'}
        labelStyle={{
        fontSize: '15px',
        fontFamily: 'sans-serif',
        fill: '#E38627',
      }}
      
      labelPosition={0}
        animate
        radius={30}
      />
    </div>
  );
}

export default LoadingCircleGithub;
