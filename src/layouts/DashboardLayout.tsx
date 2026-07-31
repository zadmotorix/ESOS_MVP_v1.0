import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';
import { Outlet } from 'react-router-dom';
export default function DashboardLayout(){
return <div style={{display:'flex'}}>
<Sidebar/>
<div style={{flex:1}}>
<Header/>
<main style={{padding:16}}><Outlet/></main>
</div>
</div>;
}