import React from 'react';
import {decreaseCount,increaseCount,removeFromCart,setIsOpen} from "../state/index";
import {useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const CartMenu = () => {

      //use navigate to move to new page
      const navigation = useNavigate()
      //use dispatch functions to manipulate state 
     const dispatch = useDispatch()
     //use selectors to select which piece of state u want to work with
     const cart = useSelector((state)=> state.cart.cart)
     const isCartOpen = useSelector((state)=> state.cart.isCartOpen)

     //Calculate total
   let  totalAmount=0
     cart.forEach((item)=>{
        totalAmount+=item.attribute.price
     })

    

  return (
    <div>
        <>
  <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>

            
            </>

    </div>
  )
}

export default CartMenu