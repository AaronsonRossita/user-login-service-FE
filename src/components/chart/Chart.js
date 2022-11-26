import React from 'react';
import './Chart.css';
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar
                    key={dataPoint.id}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.displayName}
                />
            })}
        </div>
    )
}

export default Chart;