import React, { useState } from 'react'

const MyComponent4 = () => {

    const [car, setCar] =useState({ year: 2025, 
                                    brand: "Ford", 
                                    model: "Mustang"})

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleBrandChange(event){
        setCar(c => ({...c, brand: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }


  return (
    <div className='container'>
        <h1>Your car is: {car.year} {car.brand} {car.model}</h1>
        <input type='number' value={car.year} onChange={handleYearChange} /><br/>

        <input type='text' value={car.brand} onChange={handleBrandChange} /><br/>

        <input type='text' value={car.model} onChange={handleModelChange} />

    </div>
  )
}

export default MyComponent4