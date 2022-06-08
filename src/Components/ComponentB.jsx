import React, { useState } from 'react'

function ComponentB() {
    const [form,setForm]=useState({
        name:""
    })
    const handlechange=(e)=>{
      const {className,value}=e.target;
      setForm({
          ...form,[className]:value,
      })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(form);
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
        <input type="text" onChange={handlechange} value={form.name} className="name" />
        <input type="submit"/>
        </form>
    </div>
  )
}

export default ComponentB