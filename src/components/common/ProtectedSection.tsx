import {ReactNode} from 'react';
import {useAppStore} from '../../store/appStore';
import {canAccess} from '../../services/RoleService';
export default function ProtectedSection({feature,children}:{feature:string;children:ReactNode}){
 const role=useAppStore(s=>s.role);
 return canAccess(role,feature)?<>{children}</>:<div>Access denied.</div>;
}
