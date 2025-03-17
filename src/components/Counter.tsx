"use client";
import { useState, useEffect } from 'react';

const Counter = () => {
    
    const [time, setTime] = useState<number>(0);
    const [start, setStart] = useState<boolean>(false);
    const [phase, setPhase] = useState<"Contraer" | "Relajar" | "">("");
    const [rep, setRep] = useState<number>(0);
    const [series, setSeries] = useState<number>(0);

    useEffect(() => {
        let intervalo:NodeJS.Timeout | null = null;
        if(start) {
            setRep(0);
            setPhase("Contraer");
            intervalo = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if(intervalo) clearInterval(intervalo);
            setPhase("");
            setTime(0);
        }
    }, [start]);

    useEffect(() => {
        if(time === 6) {
            setTime(1);
            setRep(prev => prev + .5);
            setPhase(prev => prev == "Contraer" ? "Relajar" : "Contraer");
        };
    }, [time]);

    useEffect(() => {
        if(Math.floor(rep) === 10) {
            setStart(false);
            setTime(0);
            setPhase("");
            setSeries(prev => prev + 1);
        }
    }, [rep]);

    const handleStart = () => {
        if(start) {
            setStart(false);
        } else setStart(true);
    };
  
    return (
    <div className="flex flex-col gap-[50px] place-items-center">
        <p>Series #{series}</p>
        <p>Repeticiones: {Math.floor(rep)}</p>
        <p>{time}</p>
        <p>{phase}</p>
        <button className="bg-white/70 text-black rounded px-3 py-1 hover:cursor-pointer" onClick={handleStart}>{start ? "Stop" : "Start"}</button>
    </div>
  )
};


export default Counter;