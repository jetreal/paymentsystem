import React from 'react'

export default ({input, meta, ...props}) => {
  return (
    <div>
      <input {...input} {...props}/>
      <br/>
      { (meta.error && meta.touched) && <span style={{color: 'yellow', fontSize: ".8rem"}}>{meta.error}</span> } 
    </div>
  )
}