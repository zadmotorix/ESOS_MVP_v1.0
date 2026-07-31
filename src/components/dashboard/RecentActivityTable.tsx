export default function RecentActivityTable(){
const rows=[['Ride Completed','09:30'],['Lead Created','10:15'],['Vendor Approved','11:05']];
return <table><thead><tr><th>Activity</th><th>Time</th></tr></thead><tbody>{rows.map(r=><tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td></tr>)}</tbody></table>;
}