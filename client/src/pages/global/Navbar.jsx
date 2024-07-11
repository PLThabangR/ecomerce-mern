
import { Link } from 'react-router-dom';
//import {useDispatch,useSelector} from 'react-redux';


const Navbar = () => {
    
 //   const dispatch = useDispatch()
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
  <a className="btn btn-ghost text-xl">Online Store</a>
  </div>
 
  <div className="navbar-end">
    <button className="btn btn-ghost btn-xl">
     Home
    </button>
    <button className="btn btn-ghost btn-xl">
      <div className="indicator">
        Cart
        <span className="badge badge-xs badge-primary indicator-item">4</span>
      </div>
    </button>
  </div>
</div>
   
    
    </>
  )
}

export default Navbar