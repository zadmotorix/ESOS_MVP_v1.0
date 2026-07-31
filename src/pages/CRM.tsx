import LeadForm from '../components/forms/LeadForm';
const leads=[{id:1,name:'Pet Owner A',status:'New'},{id:2,name:'Pet Owner B',status:'Follow-up'}];
export default function CRM(){
return <div><h2>CRM Pipeline</h2><LeadForm/><table><thead><tr><th>Name</th><th>Status</th></tr></thead><tbody>{leads.map(l=><tr key={l.id}><td>{l.name}</td><td>{l.status}</td></tr>)}</tbody></table></div>;
}