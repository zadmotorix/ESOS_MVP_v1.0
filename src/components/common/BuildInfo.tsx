import {buildInfo} from '../../services/BuildInfoService';
export default function BuildInfo(){
return <div style={{fontSize:12,opacity:.7}}>
Build {buildInfo.version} • {buildInfo.environment}<br/>
Generated: {buildInfo.buildDate}
</div>;
}