"use client"
import {useState} from 'react'

export default function Counter(){
    const[count, setCount] = useState(0)
    const increment = () => setCount(count + 1)
    const decrememnt = () => setCount(count - 1)
    
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrememnt}>Decrement</button>
        </div>
    )
}