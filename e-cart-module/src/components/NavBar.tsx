import cartIcon from "../assets/icons/cart.svg";
import wishListIcon from "../assets/icons/wishlist.svg";
import ordersIcon from "../assets/icons/orders.svg";
import searchIcon from "../assets/icons/search.svg";
import "./NavBar.scss";
import { useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { appState } from "../store/Store";
import { setUser } from "../reducers/Reducer";
import { useState } from "react";
/* 
  NavBar accepts the props
    --> handleSearch method from ProductPage
    --> isCart from CartPage
    --> isOrder form OrderPage
  --> It uses the cartArray, userData, userIndex from the Redux state
  --> It will update the onChange input value to the ProductPage using handleSearch method. 
  --> If the isCart is true, then it doesn't display the cartIcon in the navBar
  --> If the isOrder is true, then it doesn't display the orderIcon in the navBar
  --> It updates the Redux state cartArray length value beside the cartIcon, to indicate the number of unique items added to cart.

*/
function NavBar(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartArray = useSelector((state: appState) => state.cartArray);
  const userData = useSelector((state: appState) => state.userData);
  let userIndex= useSelector((state: appState) => state.userIndex);
  
  const [userLogin,setUserLogin] = useState(userIndex!=-1?(userData[userIndex].logged):false);
  let itemCount = cartArray.length;
  const handleChange = (e: any) => {
    props.handleSearch(e.target.value);
  };
  const handleUser = (e:any)=>{
    e.target.value==='logout' && (setUserLogin(false), dispatch(setUser({index:userIndex,logged:false})));
  }
  return (
    <div className="navBar">
      <h2 className="navBar-title" onClick={()=>navigate('/products')}>E-Commerce</h2>
      <div className="navBar__search">
        <div className="navBar__search-img">
          <img src={searchIcon}></img>
        </div>
        <input
          className="navBar__search-input"
          placeholder="Search the products"
          onChange={handleChange}
        />
      </div>
      <div className="navBar-user">
        {!userLogin ? (
          <button onClick={()=>navigate('/login')}>Login</button>
        ) : (
          <select onChange={handleUser}>
            <option value={userData[userIndex].userName}>{userData[userIndex].userName}</option>
            <option value="logout">Logout</option>
          </select>
        )}
      </div>
      <div className="navBar__icons">
        <div className="navBar__icons-wishListIcon">
          <img src={wishListIcon} onClick={() => {}}></img>
        </div>
        {!props.isCart && <div className="navBar__icons-cartIcon">
          <img src={cartIcon} onClick={() => navigate("/cart")}></img>
          <sup>{itemCount}</sup>
        </div>}
        {!props.isOrder && <div className="navBar__icons-ordersIcon">
          <img src={ordersIcon} onClick={() => navigate("/orders")}></img>
        </div>}
      </div>
    </div>
  );
}

export default NavBar;
