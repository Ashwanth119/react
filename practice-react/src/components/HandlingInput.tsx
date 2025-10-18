import { useState } from 'react'

function HandlingInput() {
    const [val,setVal] = useState('');
    return (
        <div style={{marginTop:'20px'}}>
            <input placeholder='Enter any value'  onChange={(e)=>setVal(e.target.value)}/>
            <p>The input value is {val}</p>
        </div>
    )
}

export default HandlingInput