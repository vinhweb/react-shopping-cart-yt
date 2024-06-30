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
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Chart.js Bar Chart',
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
			backgroundColor: 'rgba(99,109,255,0.5)',
		},
		{
			label: 'Dataset 2',
			data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
			backgroundColor: 'rgba(108,235,53,0.58)',
		},
	],
};

export default function BarChart(){
	return <Bar options={options} data={data} />;
}
