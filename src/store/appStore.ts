import {create} from 'zustand';
type AppState={role:string;setRole:(r:string)=>void};
export const useAppStore=create<AppState>((set)=>({
 role:'Strategy & Operations Consultant',
 setRole:(role)=>set({role})
}));
