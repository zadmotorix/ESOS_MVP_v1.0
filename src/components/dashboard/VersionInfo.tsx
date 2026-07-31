import {appConfig} from '../../services/ConfigService';
export default function VersionInfo(){
return <div style={{fontSize:12,opacity:.7}}>Version {appConfig.version} • {appConfig.environment}</div>;
}