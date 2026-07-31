const timeline=[
 {hour:6,scenario:"NORMAL"},
 {hour:8,scenario:"PEAK_HOUR"},
 {hour:12,scenario:"AIRPORT_RUSH"},
 {hour:17,scenario:"PEAK_HOUR"},
 {hour:20,scenario:"FESTIVAL_SURGE"},
 {hour:23,scenario:"NORMAL"}
];

export const getTimeline=()=>timeline;
export function current(hour:number){
 return [...timeline].reverse().find(x=>hour>=x.hour)||timeline[0];
}
