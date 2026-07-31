import {health} from '../services/HealthService';
export default function Health(){
 const h=health();
 return <div><h2>System Health</h2>
 <table><tbody>{Object.entries(h).map(([k,v])=><tr key={k}><td>{k}</td><td>{String(v)}</td></tr>)}</tbody></table>
 </div>;
}