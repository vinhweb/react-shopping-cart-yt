import {Bar} from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);


export const options = {
	indexAxis: 'y' as const,
	elements: {
		bar: {
			borderWidth: 2,
		},
	},
	responsive: true,
	plugins: {
		legend: {
			position: 'right' as const,
		},
		title: {
			display: true,
			text: 'Chart.js Horizontal Bar Chart',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
			borderColor: 'rgb(255, 99, 132)',
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
		{
			label: 'Dataset 2',
			data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
			borderColor: 'rgb(53, 162, 235)',
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		},
	],
};

export default function HorizontalBarChart(){
	return <Bar options={options} data={data} />;
}
