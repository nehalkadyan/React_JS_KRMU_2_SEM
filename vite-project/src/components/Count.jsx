import React from 'react'

const Count = (props) => {
  return (
    <div>
        <h1>Count Component</h1>
        <span style={{ color: "blue", fontSize: "30px"}}>{props.countVal}</span>
    </div>
  )
}

export default Count