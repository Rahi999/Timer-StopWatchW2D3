import React, { useState, useRef, useEffect } from "react";
import styles from "./timer.module.css"


export default function Timer() {
  
  const [milisecond, setMiliSecond] = useState(0)
  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hours, setHours] = useState(0);
  // const [timerId,setTimerId] = useState(0); 

  const timerId = useRef(null);
  const mili = useRef(null);
   const mint = useRef(null);
   const hour = useRef(null);

   const start = ()=> {
      if(!timerId.current){
        let id = setInterval(()=> {
          setMiliSecond((prev)=> prev+1)
        },10)
       // setTimerId(id)
       timerId.current=id;

       let sec = setInterval(() => {
           setSecond((prev)=> prev+1)
       }, 1000);
       mili.current=sec;

        let min = setInterval(()=> {
          setMinute((prev)=> prev+1)
        },60000) ;
         mint.current=min;

         let hr = setInterval(()=> {
           setHours((prev)=> prev+1)
         },360000000) ;
         hour.current=hr;
      }

   }
   const reset=()=> {
     clearInterval(timerId.current);
     setMiliSecond(0)
    timerId.current=null;

     clearInterval(mili.current)
     setSecond(0)
     mili.current=null;

     clearInterval(mint.current)
     setMinute(0)
     mint.current=null;

     clearInterval(hour.current)
     setHours(0)
     hour.current=null;
   }

   const pause = ()=> {
      clearInterval(timerId.current)
      timerId.current=null;

      clearInterval(mili.current);
      mili.current=null;

      clearInterval(mint.current)
      mint.current=null;

      clearInterval(hour.current)
      hour.current=null;
   } ;

   useEffect(()=> {
     return reset ;
   }, [])

   if(milisecond===100)
   {
    setMiliSecond(0)
   }
   if(second===60)
   {
     setSecond(0)
   }
   if(minute === 60)
   {
     setMinute(0)
   }
   if(hours === 24)
   {
     setHours(0)
   }
   
  return (
        <>
        <h1>Timer And StopWatch</h1>
    <div className={styles.box} > 
         <h1>{hours} : {minute} : {second} :  {milisecond}</h1>
         <button className={styles.button} onClick={start} >Start</button>
         <button className={styles.button} onClick={pause} >Pause</button>
         <button className={styles.button} onClick={reset} >Reset</button>

    </div>
    </>
  )
}