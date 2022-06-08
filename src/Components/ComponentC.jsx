import React from 'react'
import {useSelector} from "react-redux";
function ComponentC() {
    const store=useSelector((e)=>e);
    console.log(store);
  return (
    <div style={{color:"red"}}>
        {store.product}
    </div>
  )
}

export default ComponentC