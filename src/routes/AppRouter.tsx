import {BrowserRouter,Routes,Route} from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../pages/Dashboard';
import Operations from '../pages/Operations';
import CRM from '../pages/CRM';
import Fleet from '../pages/Fleet';
import Finance from '../pages/Finance';
import HR from '../pages/HR';
import Marketing from '../pages/Marketing';
import Vendors from '../pages/Vendors';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';
export default function AppRouter(){
return <BrowserRouter><Routes><Route element={<DashboardLayout/>}>
<Route index element={<Dashboard/>}/>
<Route path='operations' element={<Operations/>}/>
<Route path='crm' element={<CRM/>}/>
<Route path='fleet' element={<Fleet/>}/>
<Route path='finance' element={<Finance/>}/>
<Route path='hr' element={<HR/>}/>
<Route path='marketing' element={<Marketing/>}/>
<Route path='vendors' element={<Vendors/>}/>
<Route path='reports' element={<Reports/>}/>
<Route path='settings' element={<Settings/>}/>
</Route></Routes></BrowserRouter>;
}