import { useState } from 'react'
import Child from './Child';

function Parent() {
    const [msg,setMsg]=useState('Born in the Parent component');

    return (
        <>
            <p>The msg is from the parent {msg}</p>
            <Child msg={msg} setMsg={setMsg} />
        </>
    )
}

export default Parent