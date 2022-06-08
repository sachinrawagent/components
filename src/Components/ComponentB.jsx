import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { Data } from '../Redux/action';
function ComponentB() {
  const dispatch=useDispatch();
    const handlechange=(e)=>{
       dispatch(Data(e.target.value));
    }
  return (
    <div>
      <label>Write Something</label>
        <input type="text" onChange={handlechange}  className="name" />
        
        
    </div>
  )
}

export default ComponentB