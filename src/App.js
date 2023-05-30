import React, {useState, useReducer} from 'react'
import logo from './logo.svg';
import './App.css';
import counterReducer from './reducers/counterReducer'


function App() {
  const [counter, dispatch] = useReducer( counterReducer, 20 )  
  //useReducer takes in 2 parameters, the reducers, and the initial value


  return (
    <div className="App App-header">
      <h1>Counter: {counter}</h1>
      <button onClick={
        // () => dispatch({}) // the object is "action" in the reducer function
        () => dispatch({
          type: 'RESET',
          // data: "Data!!!"
        })
      }>Reset</button>
      <button onClick={
        () => dispatch({
          type: 42
        })}>The Ultimate Answer</button>
    </div>
  );
}

export default App;
