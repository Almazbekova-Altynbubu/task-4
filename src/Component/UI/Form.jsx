import React, { useState } from 'react'
import "./Form.css"

const Form = (props) => {

    const [title,setTitle]= useState("")
    const [number,setNumber]= useState("")
    const [language,setLangeage]= useState("KZ")




const titleChange = (e)=>{
    setTitle(e.target.value)
}

const numberChange = (e)=>{
    setNumber(e.target.value)
}

const languageChange = (e)=>{
    setLangeage(e.target.value)
}

const onSubmit = (e)=>{
    e.preventDefault()
}

const addListKoshuu = ()=>{
if( title !== "" && number !== ""){

  const obj = {
      title ,
      number,
      language,
  }
  props.onAluu(obj)
}
setTitle("")
setNumber("")
setLangeage("")
}



  return (
    <form onSubmit={onSubmit}>
        <div className='form'>
      <h1>Заполни Анкету:</h1>
      <label htmlFor="Title">Title:</label>
      <input onChange={titleChange} value={title} type="email" placeholder='Title' border="1px solid red"  width="70%" padding="12px 20px" id= "Title"/>
      <label htmlFor="">Amount</label>
      <input onChange={numberChange}  value ={number} type="number" placeholder='Number' width="70%" padding="12px 20px" id= "Title"/>
      <select  value = {language} onChange={languageChange} padding="10px 25px">
        <option value="KZ">KZ</option>
        <option value="KG">KG</option>
        <option value="RU">RU</option>
      </select>
      <button  className="Button"  onClick={addListKoshuu} padding="16px 35px">ADD</button>

    </div>
    </form>
  )
}

export default Form
