import {useState} from 'react';
import {getTheme,setTheme} from '../../services/ThemeService';
export default function ThemeSwitcher(){
 const [theme,setLocal]=useState(getTheme());
 return <div><h3>Theme</h3><button onClick={()=>{const n=theme==='light'?'dark':'light';setTheme(n);setLocal(n);}}>Current: {theme}</button></div>;
}