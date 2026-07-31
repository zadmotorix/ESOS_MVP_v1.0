import scenarios from '../data/scenarios.json';
export default function Operations(){
return <div><h2>Operations</h2>
<ul>{scenarios.map((s:any)=><li key={s.id}><b>{s.title}</b><ul>{s.options.map((o:any)=><li key={o}>{o}</li>)}</ul></li>)}</ul>
</div>;
}