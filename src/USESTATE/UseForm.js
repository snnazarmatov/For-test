import React, {useState} from "react";
import "../USESTATE/UseForm.css"


function UseForm(){

    const [value, setValue] = useState("")
    const [name, setName] = useState("Esen")

    const handleInput = (e) => {
        setValue(e.target.value)

    }

    const updateName = (e) => {
        e.preventDefault()
        setName(value)
        setValue("")
    }


    return(
        <div className="box">
            <h1>Hello <span>{name}</span>!</h1>
            <form>
                <div>
                    <label for="name-1">Update Name</label>
                <div>
                    <input type="text" value={value} onChange={handleInput}name="name-1"/>
                </div>
                </div>
                <div>
                    <button className='btn' onClick={updateName}>save</button>
                </div>
            </form>
        </div>
    )
}
export default UseForm;