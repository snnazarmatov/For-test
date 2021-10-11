import './Counter.css'
import React, {useState} from 'react'



function Counters(){


    const[counter, setCounter] = useState(0)

    return (
        <div className="counter">
            <h1>the nice counter!</h1>
            <div className='btn-count'> 
            <button onClick={() => setCounter(counter + 1)} className='btn'>increment</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter - 1)} className='btn'>decrement</button>
        </div>
        </div>
    )
}
export default Counters;