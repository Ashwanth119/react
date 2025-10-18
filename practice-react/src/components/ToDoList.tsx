import { useState } from 'react'

function ToDoList() {
    const [list,setList]=useState<string[]>([]);
    const [newItem,setNewItem]=useState('');
    return (
        <div style={{marginTop:'25px'}}>
            <input placeholder='Add item to the list' onChange={(e)=>setNewItem(e.target.value)}/>
            <button onClick={()=>setList([...list,newItem])}>Add item</button>
            <ul>
                {
                    list.map((item:any)=>{
                        return <li>
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList