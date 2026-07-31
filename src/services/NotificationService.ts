export type Notification={id:number;message:string;level:'info'|'warning'|'success'};
export const notifications:Notification[]=[
{id:1,message:'Morning dispatch completed',level:'success'},
{id:2,message:'2 vehicles due for service',level:'warning'}
];
export const getNotifications=()=>notifications;
