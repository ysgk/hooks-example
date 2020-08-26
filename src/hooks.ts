import React from "react";

export const useCounter = ()=> {
  const [count, setCount] = React.useState(0)
  const countUp = React.useCallback(() => {
    setCount((count) => count + 1)
  }, [])

  return [count, countUp] as const
}
