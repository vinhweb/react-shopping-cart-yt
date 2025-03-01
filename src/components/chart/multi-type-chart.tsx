import React from 'react';
import {
	Chart as ChartJS,
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";

ChartJS.register(
	LinearScale,
	CategoryScale,
	BarElement,
	PointElement,
	LineElement,
	Legend,
	Tooltip,
	LineController,
	BarController
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			type: 'line' as const,
			label: 'Dataset 1',
			borderColor: 'rgb(255, 99, 132)',
			borderWidth: 2,
			fill: false,
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
		},
		{
			type: 'bar' as const,
			label: 'Dataset 2',
			backgroundColor: 'rgb(75, 192, 192)',
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
			borderColor: 'white',
			borderWidth: 2,
		},
		{
			type: 'bar' as const,
			label: 'Dataset 3',
			backgroundColor: 'rgb(53, 162, 235)',
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
		},
	],
};

export function MultiTypeChart() {
	return <Chart type='bar' data={data} />;
}
