
import React, {useState} from 'react'

const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [status, setStatus] = useState("");

    const updateName = () => {
        setName("Ced");
    }

    const incrementAge= () =>{
        setAge(age + 1);
    }

    const decrementAge= () =>{
        setAge(age - 1);
    }

    const statusEmployee = () => {
        setStatus( age >= 18 ?  "Yes" : "Should be under 18 and above");

    }

    return(

    <>

    <div className='container'>
        <h1>Employee?</h1>
        <div>
            <p className='title'>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
        </div>

        <div >
            <p className='title'>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={decrementAge}>Decrement Age</button>
        </div>

        <div>
            <p className='title'>Employee: {status}</p>
            <button onClick={statusEmployee}>Status</button>
        </div>
    
    </div>

    </>
    );

}

export default MyComponent