// import { useState } from "react";
// import ReactDOM from "react-dom/client";

//  export function Car() {
//   const [brand, setBrand] = useState("Ford");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("1964");
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My {brand}</h1>
//       <p>
//         It is a {color} {model} from {year}.
//       </p>
//     </>
//   )
// }


import React, { useEffect, useState } from "react";
// import { useState } from "react";


export default function Set(){
    const [value,setchange] = useState('sakshi')
    const [count,setcount] = useState(1)


    function change(){
        setchange('komal')
    }
    function dec(){
        setcount(count-1)
    }

    useEffect(
        () =>{
            console.log('value is increasing')
        }, [value,count]
    )
    return(
        <>
        <h1 onClick={change}>{value}</h1>



        <h1>{count}</h1>
        <button onClick={dec}>Decrement </button>
        </>
    )
}





