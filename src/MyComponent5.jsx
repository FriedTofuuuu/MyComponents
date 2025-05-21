import React, { useState } from 'react'

const MyComponent5 = () => {

    const [foods, setFoods] = useState(["Apple",
                                        "Banana",
                                        "Grapes"]);

    function handleAddFoodChange(){

        const newFood = document.getElementById("InputFood").value;
        document.getElementById("InputFood").value = "";
        setFoods ( f => [...f, newFood]);
    }

    function handleRemoveFoodChange(index){

        setFoods (foods.filter((_, i) => i !== index));
    }

  return (

    <>

        <div className='container'>

        <h1>Foods List</h1>

            <ul>
                {foods.map((food,index) => <li key={index} 
                onClick={() => handleRemoveFoodChange (index)}>
                {food}</li>)}
            </ul>

            <input type='text' id='InputFood' placeholder='Type food'/>
            <button  onClick={handleAddFoodChange}>Add Food</button>
        </div>
    </>
  );
}

export default MyComponent5