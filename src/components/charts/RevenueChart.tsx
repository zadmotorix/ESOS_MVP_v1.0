import data from '../../data/reportData.json';
export default function RevenueChart(){
return <div><h3>Revenue Trend</h3><table><thead><tr><th>Month</th><th>Revenue</th></tr></thead><tbody>{data.map((d:any)=><tr key={d.month}><td>{d.month}</td><td>₹{d.revenue}</td></tr>)}</tbody></table></div>;
}