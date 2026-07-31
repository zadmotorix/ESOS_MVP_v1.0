const staff=[['Operations',8],['CRM',4],['Drivers',26]];
export default function HR(){return <div><h2>HR</h2><ul>{staff.map(([d,c])=><li key={String(d)}>{d}: {c}</li>)}</ul></div>}