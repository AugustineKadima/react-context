import React, { useContext } from "react";
import { CouterContext } from "./CounterContext";

export default function ChildComponent(){

    const  {counter, setCounter} = useContext(CouterContext)

    const increment = () => {
        setCounter((counter) => counter + 1)
      }
    
      const decrement = () => {
        setCounter(counter => counter - 1)
      }

    return (
        <div className='content-wrapper'>
        <h1>Child Component</h1>
        <h2>{ counter }</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <hr></hr>
  
  
      </div>
    )
}