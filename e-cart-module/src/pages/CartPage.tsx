import { useDispatch, useSelector } from "react-redux";
import { appState } from "../store/Store";
import { Cart } from "../common/Interfaces";
import CartCard from "../components/CartCard";
import "./CartPage.scss";
import { placeOrder } from "../reducers/Reducer";
import NavBar from "../components/NavBar";
import SummaryCard from "../components/SummaryCard";
import { useNavigate } from "react-router-dom";

/*
  CartPage component displays the NavBar, products added to the cart.
  --> It will also display the products which are present in cartArray (redux state array). 
  --> It uses CartCard component to display the cart items.
  --> It uses the SummaryCard component to dynamically display the title, count and price of each item in the cartArray and the total price. 
*/
function CartPage() {
  const cartArray = useSelector((state: appState) => state.cartArray);
  const userIndex=useSelector((state:appState)=>state.userIndex);
  const userData=useSelector((state:appState)=>state.userData);
  const navigate = useNavigate();
  let cartItemsArray = [...cartArray];
  cartItemsArray.sort((a: Cart, b: Cart) =>
    a.category.toLowerCase().localeCompare(b.category.toLowerCase())
  );
  const categoryArray = new Set<string>();
  const dispatch = useDispatch();
  let totalPrice:number = 0;
  const handleOrder = () => {
    if(userIndex!=-1 && userData[userIndex].logged){
      dispatch(placeOrder({cartItemsArray,totalPrice}));
      navigate('/orders');
    }
    else
      alert("Please Login to place the order");
  };
  return (
    <>
      <NavBar isCart={true}/>
      {cartItemsArray.length !== 0 ? (
        <div className="cart">
          <div className="cart__cartPage">
            {cartItemsArray.map((item: Cart) => {
                totalPrice += (item.price * item.count);
              const hasCategory = categoryArray.has(item.category);
              categoryArray.add(item.category);
              return (
                <div className="cart__cartPage__cartCard" key={item.id}>
                  {!hasCategory &&  <h2 className="cart__cartPage__cartCard-cardTitle">{(item.category[0]).toUpperCase() + item.category.slice(1)}</h2> }
                  <CartCard {...item} />
                </div>
              );
            })}
            <div className="cart__cartPage-footer">
              <button onClick={handleOrder}>Place Order</button>
            </div>
          </div>
          <div className="cart__cartSummary">
            <SummaryCard summaryArray={cartItemsArray} totalPrice={totalPrice} />
          </div>
        </div>
      ) : (
        <div className="emptyCart"><p>Add items to cart</p></div>
      )}
    </>
  );
}

export default CartPage;
