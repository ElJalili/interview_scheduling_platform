import { DayRule } from '@/types';
export const defaultRules: DayRule[] = [ {enabled:false,ranges:[]}, ...Array.from({length:5},()=>({enabled:true,ranges:[{start:'09:00',end:'12:00'},{start:'14:00',end:'17:00'}]})), {enabled:false,ranges:[]} ];
export function slotsFor(date:string,rules:DayRule[],duration:number,buffer:number,occupied:string[]) {
 const rule=rules[new Date(date+'T12:00:00').getDay()]; if(!rule?.enabled)return [];
 const toMinutes=(s:string)=>{const [h,m]=s.split(':').map(Number);return h*60+m;};
 return [...new Set(rule.ranges.flatMap(r=>{const slots:string[]=[];for(let n=toMinutes(r.start);n+duration<=toMinutes(r.end);n+=Math.max(1,duration+buffer)){const time=String(Math.floor(n/60)).padStart(2,'0')+':'+String(n%60).padStart(2,'0');const stamp=date+'T'+time;if(!occupied.some(o=>{if(o.slice(0,10)!==date)return false;const start=toMinutes(o.slice(11));return n<start+duration+buffer&&n+duration+buffer>start;}))slots.push(stamp);}return slots;}))].sort();
}
