import {environment} from '../services/EnvironmentService';
import StatusChip from '../components/common/StatusChip';
export default function SystemInfo(){
return <div><h2>System Information</h2>
<p>Environment: <StatusChip label={environment.name}/></p>
<p>API: {environment.api}</p>
<p>Maps: {environment.maps}</p>
<p>Charts: {environment.charts}</p>
</div>;
}
