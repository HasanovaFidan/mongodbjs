import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtoBasket } from '../../../Redux/Basket.Slice';

const Card = ({item}) => {
  const dispatch=useDispatch()
  const [data, setData] = useState([])
  const handleDelete = (_id) => {
    axios.delete(`https://backend-be9w.onrender.com/products/${_id}`)
      .then(() => {
        const deleteTable = data.filter(item => item.id !== _id);
        setData(deleteTable);
       
      });  
  };
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://hinicio.com/wp-content/uploads/2022/08/placeholder-3.png" className="card-img-top" alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p>{item.price}AZN</p>
          <div style={{display:"flex", gap:"20px"}} className="flex">
            <button  onClick={()=>{dispatch(addtoBasket(item))}}  className='btn btn-success'>favorite</button>
            <button onClick={()=>handleDelete(item._id)} className="btn btn-danger">Delete</button>
            
           
          </div>

        </div>
      </div>

    </div>
  )
}

export default Card
