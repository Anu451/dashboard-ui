import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary elements
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
	const data = {
		labels: ['Acquisition', 'Purchase', 'Retention'],
		datasets: [
			{
				label: 'Marketing',
				data: [40, 10, 50],
				backgroundColor: ['#FFCC91', '#97A5EB', '#5570F1'],
				hoverBackgroundColor: ['#FFCC91', '#97A5EB', '#5570F1'],
				borderWidth: 0,
			},
		],
	};

	const options = {
		cutout: '70%', // This controls the size of the inner circle
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: true,
				position: 'top',
				labels: {
					boxWidth: 10,
				},
			},
		},
	};

	return (
		<div style={{ width: '200px', height: '230px' }}>
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default DonutChart;
