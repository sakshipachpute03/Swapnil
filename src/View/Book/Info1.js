import React from 'react';
import Data1 from './Data1.json'
import './Info.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

export function Info1(){

    const{id}=useParams()
    const [Number, setNumber] = useState(1);
  
  function Dec() {
    if (Number > 1) {
      setNumber(Number - 1);

    }
  }

  function Inc() {
    setNumber(Number + 1);
  }
    return(

        Data1.map(
            (Data1)=> {
            if(Data1.id==id)
            return (
            <div className='Card'>
            <h2 className=''></h2>
            <img src ={Data1.img} className='img'/>
            <p>{Data1.description}</p>
            <p>{Data1.price}</p>
            <p>{Data1.name}</p>

            <div className='main'>
              <h1></h1>
            </div>

              {/* <button className='btn'>ok</button> */}

             
                 
              <h3 className="q">Quantity:</h3>
                  <div class="btn">
                    <button onClick={Dec} className="btns">
                      -
                    </button>
                    <p id="no" class="quantity">
                      {Number}
                    </p>
                    <button onClick={Inc} className="btns">
                      +
                    </button>
                    </div>
                  </div>

              

            
            
                )
            }
        )
    )
}