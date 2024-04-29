import { useState } from 'react'
import './App.css'

function App() {

  // const [counter, faisalCounter] = useState(0) // set is a convension
  const [counter, setCounter] = useState(10) // 10 is the default value of counter [counter is variable, faisalCounter is function of counter set]
  
  // let counter  = 10 // programatically increass/decress the variable value, but in UI the update dose not impact/show

  const increassValue = () => {
    // counter = counter + 1
    // console.log('incressed', counter)
    // console.log(counter)

    // counter should not incress getter then 20 
    // if (counter < 20){
    //   faisalCounter(counter + 1) // actually state and UI syncing
    // }

    // this 3 line execute same state for useState module, so that this type of multiple increment not work defaultly  
    // setCounter(counter + 1) //same result
    // setCounter(counter + 1) //same result
    // setCounter(counter + 1) //same result


    // use call back of call back for update previous state, and 4 line result will difference
    // one line execution so that return not need
    setCounter(prevCounter => prevCounter + 1)  // result
    setCounter(prevCounter => prevCounter + 1)  // result + 1
    setCounter(prevCounter => prevCounter + 1)  // result + 1
    setCounter(prevCounter => prevCounter + 1)  // result + 1

  }


  const decressValue = () => {
    // counter = counter - 1
    // faisalCounter(counter - 1) // actually state and UI syncing
    // console.log(counter)

    // counter should not decress less then 0 
    // if (counter > 0){
    //   faisalCounter(counter - 1)
    // }

    // { } multi line execution so that return need
    setCounter(prevCounter => { return prevCounter - 1})
    setCounter(prevCounter => { return prevCounter - 1})
    setCounter(prevCounter => { return prevCounter - 1})
    setCounter(prevCounter => { return prevCounter - 1})
  }

  return (
    <>

    {/* UI updata control form React and that backend works is hooks  */}

      <h1>Our Counter </h1>
      <h2>Counter Value: {counter}</h2>    

      <button onClick={increassValue} >Incress</button>

      <button onClick={decressValue} >Decress</button>

    </>
  )
}

export default App
