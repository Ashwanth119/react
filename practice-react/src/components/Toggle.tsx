import { useState } from 'react'

function Toggle() {
    const [visible,setVisible] = useState(false);

    return (
        <>
            <button onClick={()=>setVisible(!visible)}>{visible ? "Hide Message" : "Show Message"}</button>
            {visible ? <p>Hello Welcome to the toggle button! You pressed the Show Message. To go back, press the Hide Message.</p> 
            : <p>To view the message, press the Show Message!</p>}
        </>
    )
}

export default Toggle