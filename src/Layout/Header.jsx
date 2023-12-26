import React from 'react'
import { SlBasket } from "react-icons/sl";
import "./header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <header>
    <div style={{display:"flex",justifyContent:"space-between"}} className="container">
    <div className="left">

<h2>Start Bootstrap</h2>
<Link to={"/"}>Home</Link>
  <a href="">About</a>
  <a href="">Shop</a>
</div>
<div className="right">
<SlBasket className='icn' style={{color:"black"}}/> 
<Link  className='lin' to={"basket"}><p style={{paddingTop:"15px"}}>Card</p></Link>
</div>
    </div>
      </header>
      <div className="adi">
        <h3 style={{fontSize:"50px"}}>Shop in style</h3>
        <p style={{color:"grey"}}>With this shop hompeage template</p>
      </div>
    </div>
  )
}

export default Header
