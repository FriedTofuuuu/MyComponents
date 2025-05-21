import React, { useState } from 'react'
  
const MyComponent2 = () => {

  
  const [name, setName] = useState("");
  const[quantity, setQuantity] = useState(0);
  const[comment, setComment] = useState("");
  const[payment, setPayment] = useState("");
  const[shipping, setShipping] = useState();


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }
    
    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return(

        <div className='container'>

            <h1>Shipping</h1>
            <div>
                <input value={name} onChange={handleNameChange} />

                <p>Name: {name}</p>
            </div>

            <div>
                <input value={quantity} onChange={handleQuantityChange} type='number'/>

                <p>Quantity: {quantity}</p>
            </div>

            <div>
                <textarea value={comment} onChange={handleCommentChange} placeholder='Type your Comment here'/>

                <p>Comment: {comment}</p>
            </div>

            <select value={payment} onChange={handlePaymentChange}>

                <option value={""}>Choose where to pay</option>
                <option value={"Visa"}>Visa</option>
                <option value={"Paypal"}>Paypal</option>
                <option value={"Gcash"}>Gcash</option>
            </select>

            <p>Payment: {payment}</p>

            <input type='radio' value="Pick-up" checked={shipping === "Pick-up"} onChange={handleShippingChange} />
            <label>
                Pick-up
            </label>

            <input type='radio' value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            <label>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>
        </div>

    );

}

export default MyComponent2