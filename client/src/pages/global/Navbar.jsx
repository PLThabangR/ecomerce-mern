
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { setIsOpen, setItems } from '../state';


const Navbar = () => {
    //use navigate to move to new page
    const navigation = useNavigate()
    //use dispatch functions to manipulate state 
   const dispatch = useDispatch()
   //use selectors to select which piece of state u want to work with
   const cart = useSelector((state)=> state.cart.cart)
  return (
    <>
    <div className="navbar bg-base-300">
  <div className="navbar-start">
  <a className="btn btn-ghost text-xl">Online Store</a>
  </div>
 
  <div className="navbar-end">
    <button className="btn btn-ghost btn-xl">
     Home
    </button>
    <button className="btn btn-ghost btn-xl">
      <div className="indicator">
       <span onClick={()=>dispatch(setIsOpen({}))}> Cart </span>
        {cart.length===0?<></>  :<span className="badge badge-xs badge-primary indicator-item">{cart.legnth}</span>}
      </div>
    </button>
  </div>
</div>
   
    
    </>
  )
}

export default Navbar