export default function NotificationPanel({items}:{items:string[]}) {
return <div><h3>Notifications</h3><ul>{items.map(i=><li key={i}>{i}</li>)}</ul></div>;
}