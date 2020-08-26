import React from 'react'
import {useCounter} from "./hooks";

export const Child: React.FC = () => {
  console.log('render: Child')
  const [count, countUp] = useCounter()

  return (
    <div>
      <div>Child: {count}</div>
      <button onClick={countUp}>Count Up</button>
    </div>
  )
}
