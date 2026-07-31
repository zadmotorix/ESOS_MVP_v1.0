import {useState} from 'react';
export default function LeadForm(){
const [name,setName]=useState('');
return <form><h3>New Lead</h3><input value={name} onChange={e=>setName(e.target.value)} placeholder='Customer name'/><button type='button'>Save</button></form>;
}