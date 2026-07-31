import {useDashboard} from '../hooks/useDashboard';
import Loading from '../components/common/Loading';
import SearchBox from '../components/common/SearchBox';
import VersionInfo from '../components/dashboard/VersionInfo';
import SummaryPanel from '../components/dashboard/SummaryPanel';
export default function Dashboard(){
const {data,loading}=useDashboard();
if(loading) return <Loading/>;
return <div>
<h1>Enterprise Dashboard</h1>
<SearchBox/>
<SummaryPanel/>
<VersionInfo/>
<pre>{JSON.stringify(data.kpis,null,2)}</pre>
</div>;
}