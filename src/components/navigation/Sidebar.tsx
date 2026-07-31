import {NavLink} from 'react-router-dom';
const items=[['/','Dashboard'],['/operations','Operations'],['/crm','CRM'],['/fleet','Fleet'],['/finance','Finance'],['/hr','HR'],['/marketing','Marketing'],['/vendors','Vendors'],['/reports','Reports'],['/settings','Settings']];
export default function Sidebar(){return <aside style={{width:220,padding:12,borderRight:'1px solid #ddd'}}>{items.map(([p,l])=><div key={p}><NavLink to={p}>{l}</NavLink></div>)}</aside>;}
