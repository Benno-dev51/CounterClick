import React, {useState}from "react";






function App() {



const [count, setCount] =useState(0)


const increase=()=>setCount(count+1)
const decrease=()=>setCount(count-1)

 

 




  return <div className="container">
  <div className='number-container'> <h1>{count}</h1></div>
 <button onClick={increase}>+</button>
 <button onClick={decrease}>+</button>
</div>;
}

export default App;

