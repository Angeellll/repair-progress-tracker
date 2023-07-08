import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarGraph = () => {
  useEffect(() => {
    Chart.register.apply(null, require('chart.js').defaults.plugins);
  }, []);

  const destroyChart = () => {
    const canvas = document.querySelector('#myChartCanvas');
    if (canvas) {
      const chart = Chart.getChart(canvas);
      if (chart) {
        chart.destroy();
      }
    }
  };

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Bar Graph',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <canvas id="myChartCanvas" />
      <Bar
        data={data}
        options={options}
        getElementAtEvent={() => null}
        getDatasetAtEvent={() => null}
      />
    </div>
  );
};

export default BarGraph;
