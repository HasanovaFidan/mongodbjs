import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import "./Cards.css"
import dataContexts from '../../../Contexts/Contexts'

const Cards = () => {

  let { data, setData, loading } = useContext(dataContexts)
  return (
    <div>
{
         <div className="container">
         <div className="row">
           {
           data.map((item, index) => (
             <div key={index} className="col-3 mb-5">
               <Card item={item}  />
             </div>
           ))}
         </div>
       </div>
}
    </div>
  )
}

export default Cards
