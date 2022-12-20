import React, { useEffect, useState } from 'react';
import '../estilos/contenedor.css';

const Timer=() =>{

    const[cero,setSeconds]=useState(0);
    const[diez, setMinutes]=useState(0);
    const[cien, setcien]=useState(0);
    const[mil, setMil]=useState(0);
    const[diezmil, setdiezmil]=useState(0);
    const[cienmil, setcienmil]=useState(0);


    
    useEffect(()=>{
        var tiempo;

        tiempo=setInterval(()=>{
            setSeconds(cero + 1);
            if(cero===9){
                setMinutes(diez + 1);
                setSeconds(0);
                if(diez===9){
                    setcien(cien + 1);
                    setMinutes(0);
                    if(cien===9){
                        setMil(mil + 1);
                        setcien(0);
                        if(mil===9){
                            setdiezmil(mil + 1);
                            setMil(0);
                            if(diezmil===9){
                                setcienmil(mil + 1);
                                setdiezmil(0);
                                
                            
                        }
                    }
                }
            }}
        },1000)

        return()=>clearInterval(tiempo);
    });
    return(
        <div className='numeros'>
        <div className='contenedor-numero'>
        <div className='numero'>{cienmil}</div> 
        </div>
        <div className='contenedor-numero'>
        <div className='numero'>{diezmil}</div> 
        </div>
        <div className='contenedor-numero'>
        <div className='numero'>{mil}</div> 
        </div>
        <div className='contenedor-numero'>
        <div className='numero'>{cien}</div> 
        </div>
        <div className='contenedor-numero'>
        <div className='numero'>{diez}</div> 
        </div>
        <div className='contenedor-numero'>
        <div className='numero'>{cero}</div> 
        </div>
       
        
       </div>
    )

}

export default Timer;