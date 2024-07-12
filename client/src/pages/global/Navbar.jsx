
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { setIsOpen, setItems } from '../state';


const Navbar = () => {
    const navigation = useNavigate()
   const dispatch = useDispatch()
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
        <span className="badge badge-xs badge-primary indicator-item">4</span>
      </div>
    </button>
  </div>
</div>
   
    
    </>
  )
}

export default Navbar