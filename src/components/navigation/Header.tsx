import {useAppStore} from '../../store/appStore';
export default function Header(){const role=useAppStore(s=>s.role);return <header style={{padding:16,borderBottom:'1px solid #ddd'}}><b>ESOS MVP</b><span style={{float:'right'}}>{role}</span></header>;}
