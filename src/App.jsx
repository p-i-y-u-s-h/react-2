import { useState,useEffect } from 'react'

function App(){

  let [counterVisible , setCounterVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);

    return () => clearInterval(interval); 
  }, []);
  return <div>
    <div style={{visibility:counterVisible? "visible" : "hidden"}}>
      <Counter></Counter>
    </div>
    {/* {counterVisible && <Counter></Counter>} */}
  </div>
}

function Counter(){
   
  const [count,setCount] = useState(1);

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