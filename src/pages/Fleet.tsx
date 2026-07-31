import FleetMap from '../components/maps/FleetMap';
const vehicles=[{id:'CAB-101',driver:'Anil',status:'Available'},{id:'CAB-102',driver:'Sara',status:'On Trip'}];
export default function Fleet(){
return <div><h2>Fleet</h2><FleetMap/><table><thead><tr><th>Vehicle</th><th>Driver</th><th>Status</th></tr></thead><tbody>{vehicles.map(v=><tr key={v.id}><td>{v.id}</td><td>{v.driver}</td><td>{v.status}</td></tr>)}</tbody></table></div>;
}