// import './Blogsimple.css';
import Data1 from '../View/Book/Data1.json'
import { Card } from '../Component/Product'
import React from 'react';


export function Simple() {

  return (
    Data1.map(
      (Data1) => {
        return (
          <>
            <div className="card-container"> 
              <Card id={Data1.id} name={Data1.name} description={Data1.description} price={Data1.price} img={Data1.img} img1={Data1.img1} />
             </div> 
          </>
        )
      }
    )
  )

}