import {appConfig} from '../../services/ConfigService';
export default function AppInfo(){
 return <small>{appConfig.appName} v{appConfig.version}</small>;
}