import { Candidate, Position, Stage } from '@/types';
export const stages: Stage[] = ['Applied','Shortlisted','Interview Booked','Interviewed','Hired','Rejected'];
export const positions: Position[] = [
 {id:'p1',title:'Frontend Developer',department:'Engineering',location:'Casablanca',status:'Open',color:'lilac'},
 {id:'p2',title:'Product Designer',department:'Design',location:'Remote',status:'Open',color:'peach'},
 {id:'p3',title:'Marketing Manager',department:'Marketing',location:'Rabat',status:'Open',color:'mint'},
 {id:'p4',title:'Backend Developer',department:'Engineering',location:'Casablanca',status:'Open',color:'blue'},
 {id:'p5',title:'People Partner',department:'People',location:'Casablanca',status:'Closed',color:'pink'}];
const rows = [
 ['Amine Bennani','Frontend Developer','Applied','blue'],['Sarah El Amrani','Product Designer','Applied','pink'],['Youssef Alami','Backend Developer','Applied','mint'],['Lina Berrada','Product Designer','Shortlisted','lilac'],['Adam Idrissi','Frontend Developer','Shortlisted','peach'],['Inès Mansouri','Marketing Manager','Shortlisted','pink'],['Leila Chraibi','Product Designer','Interview Booked','peach'],['Omar Tazi','Frontend Developer','Interview Booked','blue'],['Nour Ait Ali','Backend Developer','Interview Booked','mint'],['Mehdi Alaoui','Marketing Manager','Interviewed','lilac'],['Aya Benjelloun','Frontend Developer','Interviewed','pink'],['Sofia Fassi','Product Designer','Hired','mint'],['Rayan El Hadi','Backend Developer','Rejected','peach']];
export const candidates: Candidate[] = rows.map((r,i)=>({id:`c${i+1}`,name:r[0],email:r[0].toLowerCase().replaceAll(' ',' .').replaceAll(' .','.')+'@email.com',position:r[1],stage:r[2] as Stage,color:r[3],date:'2026-10-'+String(1+i%6).padStart(2,'0'),notes:'',activity:['Application received'],interviewer:i%2?'Nadia El Idrissi':'Alex Morgan',...(i>=6&&i<=8?{booking:`2026-10-07T${['09:00','10:30','14:00'][i-6]}`,interviewStatus:'Upcoming' as const}: {})}));
