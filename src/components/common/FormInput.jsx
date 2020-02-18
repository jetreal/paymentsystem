import React from 'react'

export default ({input, meta, ...props}) => {
  return (
    <div>
      <input {...input} {...props}/>
      <br/>
      { (meta.error) && <span style={{color: 'yellow'}}>{meta.error}</span> } 
    </div>
  )
}