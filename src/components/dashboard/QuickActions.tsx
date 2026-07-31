export default function QuickActions(){
 const actions=['Create Lead','Dispatch Driver','Generate Report'];
 return <div><h3>Quick Actions</h3><ul>{actions.map(a=><li key={a}>{a}</li>)}</ul></div>;
}
