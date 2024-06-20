import React from 'react';
import './Product.css';
// import {Product} './../Component/Product1';
import { Link } from 'react-router-dom';


export function Card ({ img,name, price,description,id }) {
  return (
    <div className="card">
      <div>
      <img src={img} className='img'/>
    </div>
    
    <div className='simply'>
      <h2 className='name'>{name}</h2>
      {/* <img src={img1} className='img1'/> */}
      <h2 className='price'>{price}</h2>
      <p className='description'>{description}</p>
      <Link to={`/Info1/${id}`}>Info1</Link>
      </div>

    </div>
 

  );
};