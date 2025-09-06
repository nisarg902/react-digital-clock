
import React, { useState } from "react";

const Clock =() =>{

 const currentTime=new Date().toLocaleTimeString();

    const[time,setTime]= useState(currentTime);

    const Update =()=>{

         const currentTime=new Date().toLocaleTimeString();

        setTime( currentTime)
    }

setInterval(()=>{
Update()

},1000)

    return(

    <>
    
         <div className=" justify-content-center align-iten-center p-3 m-3">
            <h1 className=" text-primary">DIGITAL Clock</h1>
            <h1>    
                {
                    time
                }
            </h1>
         </div>
    
    </>


    );
}

export default Clock