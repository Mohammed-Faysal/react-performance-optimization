import { useCallback, useState, useMemo } from "react"
import OurAppTitle from "./Component/OurAppTitle"
import Buttons from "./Component/Buttons"
import Titles from "./Component/Titles"

function App() {

  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const isEven = useMemo(() => {
    let i = 0
    while(i < 1000000000) i++
    return count % 2 == 0 ? "Even" : "Odd"
  }, [count])

  const increaseHandle = useCallback(() => {
    setCount((prev) => prev + 1)
  }, [])

  const decreaseHandle = useCallback(() => {
    setCount1((prev) => prev - 2)
  }, [])

  console.log('Component rerender');

  return (
    <>
      <OurAppTitle/>
      <hr/>
      {/* <p>{isEven()}</p> jodi useMemo use na kori, tahole akta function ke eivabe jsx er modde call korte hoi. */}
      <p>{isEven}</p>
      <Titles count={count}/>
      <Buttons name={'Increase'} handler={increaseHandle}/>
      <hr/>
      <Titles count={count1}/>
      <Buttons name={'Decrease'} handler={decreaseHandle}/>
    </>
  )
}

export default App
