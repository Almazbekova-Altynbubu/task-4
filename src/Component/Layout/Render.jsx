import React, { useState } from 'react'
import Form from '../UI/Form'
import "./Render.css"

const Render = () => {

    const [valueAluu, setValuealuu] = useState([])

    const getValue =(a)=>{
        setValuealuu((prevState)=>{
return [...prevState,a];
        });
    };






  return (
    <div>
      <Form onAluu={getValue}/>
      {valueAluu.map((el)=>{

return(
<div className='mapat'>
    <p>{el.title}</p>
    <p>{el.number}</p>
    <p>{el.language}</p>
</div>

)
      })}
    </div>
  )
}

export default Render
