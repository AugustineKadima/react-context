import React, { useContext } from "react";
import ChildComponent from "./ChildComponent";
import { CouterContext } from "./CounterContext";


export default function FComponent(){

    const {counter, setCounter} = useContext(CouterContext)

    const increment = () => {
        setCounter((counter) => counter + 1)
      }
    
      const decrement = () => {
        setCounter(counter => counter - 1)
      }

    return (
        <div className='content-wrapper'>
        <h1>F Component</h1>
        <h2>{ counter }</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <hr></hr>
        <ChildComponent />
  
      </div>
    )
}