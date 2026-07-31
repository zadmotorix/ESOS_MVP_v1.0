import KPITrend from '../components/charts/KPITrend';
import RevenueChart from '../components/charts/RevenueChart';
import FleetUtilizationChart from '../components/charts/FleetUtilizationChart';
import ExportButtons from '../components/reports/ExportButtons';
export default function Reports(){
return <div><h2>Reports & Analytics</h2><ExportButtons/><KPITrend/><RevenueChart/><FleetUtilizationChart/></div>;
}