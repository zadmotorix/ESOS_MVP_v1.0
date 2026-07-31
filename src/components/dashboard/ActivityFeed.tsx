export default function ActivityFeed(){
const items=['Driver reassigned','CRM lead added','Vendor accepted booking'];
return <div><h3>Activity</h3><ul>{items.map(i=><li key={i}>{i}</li>)}</ul></div>;
}