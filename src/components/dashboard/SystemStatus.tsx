export default function SystemStatus(){
const items=[['API','Online'],['Database','Connected'],['Dispatch','Healthy']];
return <div><h3>System Status</h3><ul>{items.map(i=><li key={i[0]}>{i[0]}: {i[1]}</li>)}</ul></div>;
}