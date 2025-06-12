import { useState } from 'react'

function Counter() {
    const [count,setCounter] = useState(0);

    const inc = ()=>{
        setCounter(count+1);
    }

    const dec = ()=>{
        setCounter(count-1);
    }

  return (
    <div>
        <p>Count = {count}</p>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
    </div>
  )
}

export default Counter