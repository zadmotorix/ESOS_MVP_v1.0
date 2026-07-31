import {exportJSON} from '../../services/ExportService';
export default function ExportButtons(){
return <div><button onClick={()=>exportJSON('dashboard-report.json',{generated:new Date().toISOString()})}>Export JSON</button></div>;
}