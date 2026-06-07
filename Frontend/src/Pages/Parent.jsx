import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
      <Child name="Jaisre" age={18}
        marks={[90, 80, 90, 92, 93]}
        person={{ name: "jaisre", dept: ["AIDS"] }}
      />
    </div>
  )
}

export default Parent