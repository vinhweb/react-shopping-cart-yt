import BarChart from "./bar-chart";
import HorizontalBarChart from "./horizontal-bar-chart";
import {StackedBarChart} from "./stacked-bar-chart";
import {GroupedBarChart} from "./grouped-bar-chart";
import {AreaChart} from "./area-chart";
import {LineChart} from "./line-chart";
import {MultiaxisLineChart} from "./multiaxis-line-chart";
import {PieChart} from "./pie-chart";
import {DoughnutChart} from "./doughnut-chart";
import {PolarAreaChart} from "./polar-area-chart";
import {RadarChart} from "./radar-chart";
import {ScatterChart} from "./scatter-chart";
import {BubbleChart} from "./bubble-chart";
import {MultiTypeChart} from "./multi-type-chart";
import {ChartEvent} from "./chart-event";
import {ChartRef} from "./chart-ref";
import {ChartGradient} from "./chart-gradient";

export default function ChartPageContent(){
	return (
		<>
			<BarChart/>
			<HorizontalBarChart/>
			<StackedBarChart/>
			<GroupedBarChart/>
			<AreaChart/>
			<LineChart/>
			<MultiaxisLineChart/>
			<PieChart/>
			<DoughnutChart/>
			<PolarAreaChart/>
			<RadarChart/>
			<ScatterChart/>
			<BubbleChart/>
			<MultiTypeChart/>
			<ChartEvent/>
			<ChartRef/>
			<ChartGradient/>
		</>
	)
}
