import React, { useState } from 'react'



const MyComponent3 = () => {
     
    const [color, setColor] = useState("");

    function handleColorChange(event){
        setColor(event.target.value);
    }

  return (

    <div className='container'>

        <h1>Color Picker</h1>

        <h2>Selected Color: {color}</h2>

        <div className='color-picker' style={{background: color}}></div>

        
        <label>Seclect Color</label>
        <br/>

        <input type='color' value={color}  onChange={handleColorChange}/>

    </div>
  );
}

export default MyComponent3