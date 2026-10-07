'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { candidates as initialCandidates, positions as initialPositions } from '@/data/mock';
import { defaultRules } from '@/lib/scheduling';
import { Candidate, Position, DayRule } from '@/types';
type State = { candidates:Candidate[]; positions:Position[]; rules:DayRule[]; duration:number; buffer:number; timezone:string; profile:string; email:string; notifications:boolean[] };
const initial:State={candidates:initialCandidates,positions:initialPositions,rules:defaultRules,duration:30,buffer:15,timezone:'Africa/Casablanca',profile:'Nadia El Idrissi',email:'nadia@novaslt.com',notifications:[true,true,false]};
type Context = { state:State; setState:React.Dispatch<React.SetStateAction<State>>; ready:boolean; lang:'en'|'fr'; setLang:(l:'en'|'fr')=>void; dark:boolean; setDark:(b:boolean)=>void; t:(en:string,fr:string)=>string; toast:(s:string)=>void };
const AppContext=createContext<Context>(null!);
export function AppProvider({children}:{children:React.ReactNode}) {
 const [state,setState]=useState(initial),[lang,setLang]=useState<'en'|'fr'>('en'),[dark,setDark]=useState(false),[ready,setReady]=useState(false),[message,setMessage]=useState('');
 useEffect(()=>{try{const s=localStorage.getItem('nova-state');if(s)setState({...initial,...JSON.parse(s)});setLang(localStorage.getItem('nova-lang')==='fr'?'fr':'en');setDark(localStorage.getItem('nova-theme')==='dark');}catch{}setReady(true);const sync=(e:StorageEvent)=>{try{if(e.key==='nova-state'&&e.newValue)setState({...initial,...JSON.parse(e.newValue)});if(e.key==='nova-lang')setLang(e.newValue==='fr'?'fr':'en');if(e.key==='nova-theme')setDark(e.newValue==='dark');}catch{}};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[]);
 useEffect(()=>{if(ready){try{localStorage.setItem('nova-state',JSON.stringify(state));localStorage.setItem('nova-lang',lang);localStorage.setItem('nova-theme',dark?'dark':'light');}catch{}}document.documentElement.classList.toggle('dark',dark);document.documentElement.lang=lang;},[state,lang,dark,ready]);
 useEffect(()=>{if(message){const timer=setTimeout(()=>setMessage(''),3500);return()=>clearTimeout(timer);}},[message]);
 return <AppContext.Provider value={{state,setState,ready,lang,setLang,dark,setDark,t:(en,fr)=>lang==='en'?en:fr,toast:setMessage}}>{ready?children:<div className="loading-screen" role="status" aria-label={lang==='en'?'Loading workspace':'Chargement de l’espace'}><span>✳</span><div/></div>}{message&&<div className="toast" role="status">✓ {message}</div>}</AppContext.Provider>;
}
export const useApp=()=>useContext(AppContext);
