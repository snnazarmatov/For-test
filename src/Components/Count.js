import React, {useState} from "react";
import './Count.css'

function Count(){

    const [count, setCount] = useState(0)

    const plus = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    return(
        <div className="esen">
            <h1>Counter</h1>
            <h1>{count}</h1>
            <button style={{padding:"10px", fontSize:"1.5em", borderRadius:"0.6rem"}}
             onClick={plus}>plus</button>
            <button style={{padding:"10px", fontSize: "1.5em", borderRadius:"0.6rem"}} 
            onClick={minus}>minus</button>
        </div>
    )
}
export default Count;