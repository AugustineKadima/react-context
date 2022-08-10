import './App.css';
import { useState } from 'react';
import FComponent from './FComponent';
import { CouterContext } from './CounterContext';

function App() {

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter((counter) => counter + 1)
  }

  const decrement = () => {
    setCounter(counter => counter - 1)
  }

  return (
    <div className='content-wrapper'>
      <h1>App Component</h1>
      <h2>{ counter }</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <hr/>
      <CouterContext.Provider value={{counter, setCounter}}>
        <FComponent />
        <hr/>
      </CouterContext.Provider>
    </div>
  );
}

export default App;
