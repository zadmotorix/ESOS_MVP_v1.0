import {useState} from 'react';
export default function SearchBox(){
const [q,setQ]=useState('');
return <input value={q} onChange={e=>setQ(e.target.value)} placeholder='Search...' />;
}