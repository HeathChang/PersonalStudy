import React,{ useEffect, useState } from 'react';
const InputField=({
  type, 
  value,
  placeholder, 
  onChange, 
  errorMessage
})=>{
  return(
    <div>
      <input
        style={{borderColor: "red"}}
        type={type}
        value={value} //입력시 값이 변경
        placeholder={placeholder}
        onChange={onChange}
      />
      <br/>
    <div style={{color: "red"}}>{errorMessage}</div>

  </div>
  )
}
export default InputField;