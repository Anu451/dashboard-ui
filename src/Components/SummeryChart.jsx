import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

const SalesChart = () => {
	const data = {
		labels: [
			'Sept 10',
			'Sept 11',
			'Sept 12',
			'Sept 13',
			'Sept 14',
			'Sept 15',
			'Sept 16',
		],
		datasets: [
			{
				label: 'Sales',
				data: [80000, 40000, 60000, 50000, 70000, 60000, 80000],
				backgroundColor: '#5570F1',
				barPercentage: 0.5,
				categoryPercentage: 0.5,
			},
			{
				label: 'Max Sales',
				data: [100000, 100000, 100000, 100000, 100000, 100000, 100000],
				backgroundColor: ' #556ff143',
				barPercentage: 0.5,
				categoryPercentage: 0.5,
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			y: {
				beginAtZero: true,
				max: 100000,
				ticks: {
					callback: function (value) {
						return value >= 1000 ? value / 1000 + 'k' : value;
					},
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				mode: 'index',
				intersect: false,
			},
		},
	};

	return (
		<div className=" h-[235px]">
			<Bar data={data} options={options} />
		</div>
	);
};

export default SalesChart;
