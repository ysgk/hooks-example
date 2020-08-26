import React from 'react';
import {Child} from "./Child";
import {useCounter} from "./hooks";

function App() {
  console.log('render: App')
  const [count] = useCounter()

  return (
    <div>
      <div>Parent: {count}</div>
      <Child />
    </div>
  );
}

export default App;
