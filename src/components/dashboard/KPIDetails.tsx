export default function KPIDetails(){
const items=[['Avg Response','3.4 min'],['Ride Completion','98.7%'],['NPS','74']];
return <div><h3>KPI Details</h3><table><tbody>{items.map(i=><tr key={i[0]}><td>{i[0]}</td><td>{i[1]}</td></tr>)}</tbody></table></div>;
}