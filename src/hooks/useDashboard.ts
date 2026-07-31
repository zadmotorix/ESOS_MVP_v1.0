import {useEffect,useState} from 'react';
import {fetchDashboard} from '../services/ApiService';
export function useDashboard(){
 const [data,setData]=useState<any>(null);
 const [loading,setLoading]=useState(true);
 useEffect(()=>{fetchDashboard().then(r=>{setData(r);setLoading(false);});},[]);
 return {data,loading};
}
