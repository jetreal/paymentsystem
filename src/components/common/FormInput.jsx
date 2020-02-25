import React, {useRef} from 'react'

export default ({input, meta, ...props}) => {
  console.log(input)
  console.log(meta)
  console.log(({...props}.type))
  const myRef = useRef(null);
  const resRef = myRef.current
  // resRef.onClick = function() {console.log('gg')}
  return (
    <div >
      <input ref={myRef} {...input} {...props}
        // onKeyDown={({...props}.type === 'number') ? (event) => myRef.current.onkeydown = (event) => event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key)): null}
        // onKeyDown={(event) => event.keyCode === 8 || event.keyCode === 46 ? true : !isNaN(Number(event.key))}
      />
      <br/>
      { (meta.error && meta.visited) && <span style={{color: 'yellow', fontSize: ".8rem"}}>{meta.error}</span> } 
    </div>
  )
}