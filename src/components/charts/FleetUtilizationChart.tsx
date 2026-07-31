export default function FleetUtilizationChart(){
const rows=[['Available',18],['On Trip',12],['Maintenance',2]];
return <div><h3>Fleet Utilization</h3><table><tbody>{rows.map(r=><tr key={String(r[0])}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody></table></div>;
}