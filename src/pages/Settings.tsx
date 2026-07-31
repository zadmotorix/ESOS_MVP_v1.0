import LoginCard from '../components/auth/LoginCard';
import RoleManager from '../components/settings/RoleManager';
import ThemeSwitcher from '../components/settings/ThemeSwitcher';
import AppInfo from '../components/common/AppInfo';
export default function Settings(){
 return <div><h2>Settings</h2><LoginCard/><RoleManager/><ThemeSwitcher/><AppInfo/></div>;
}