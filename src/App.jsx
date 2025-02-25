import { useState,useEffect } from 'react'

function App(){
  return <div>
    <Counter></Counter>
  </div>
}

function Counter(){
  const [count,setCount] = useState(0);

  useEffect(function(){
    const interval = setInterval(function(){
      setCount(count => count + 1);
    }, 1000)
    return () => clearInterval(interval);
  }, []);

  return <div>
    <h1>{count}</h1>
  </div>
}

export default App