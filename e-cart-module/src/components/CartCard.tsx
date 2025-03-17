import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../common/Interfaces";
import { deleteFromCart } from "../reducers/Reducer";
import { appState } from "../store/Store";
import ItemCount from "./ItemCount";

function CartCard(props: Cart) {
  const dispatch = useDispatch();
  const cartArray = useSelector((state:appState)=>state.cartArray);
  const cartItem:Cart[] = cartArray.filter((item)=>item.id===props.id);
  const handleDelete = () => {
    dispatch(deleteFromCart(props));
  };
  if(cartItem.length && cartItem[0].count===0){
    dispatch(deleteFromCart(cartItem[0]));
  }
  return (
    cartItem.length && <div className="cart__cartPage__cartCard__card">
    <div className="cart__cartPage__cartCard__card__detailSection">
      <div className="cart__cartPage__cartCard__card__detailSection-img">
        <img src={props.image}></img>
      </div>
      <div className="cart__cartPage__cartCard__card__detailSection__display">
        <h4 className="cart__cartPage__cartCard__card__detailSection__display-title">{props.title}</h4>
        <p className="cart__cartPage__cartCard__card__detailSection__display-des">{props.description}</p>
        <p className="cart__cartPage__cartCard__card__detailSection__display-price">Price: ${cartItem[0].price*cartItem[0].count}</p>
      </div>
      </div>
      <div className="cart__cartPage__cartCard__card__buttonSection">
        <div className="cart__cartPage__cartCard__card__buttonSection__countButton">
            <ItemCount {...props} />
        </div>
        <div className="cart__cartPage__cartCard__card__buttonSection-deleteBtn">
            <button onClick={handleDelete}>Remove from cart</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
