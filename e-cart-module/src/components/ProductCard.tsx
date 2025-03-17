import { useDispatch, useSelector } from "react-redux";
import { Cart, Product } from "../common/Interfaces";
import { addToCart, incrementItemCount } from "../reducers/Reducer";
import { appState } from "../store/Store";
import ItemCount from "./ItemCount";

function ProductCard(props: Product) {
  const dispatch = useDispatch();
  const cartArray = useSelector((state: appState) => state.cartArray);
  const cartItem: Cart[] = cartArray.filter((item) => item.id === props.id);
  const handleCart = () => {
    dispatch(addToCart({ ...props, count: 0 }));
    dispatch(incrementItemCount({ ...props, count: 0 }));
  };
  
  return (
    <>
      <div className="productPage__productCard-img">
        <img src={props.image}></img>
      </div>
      <h4 className="productPage__productCard-title">{props.title}</h4>
      <p className="productPage__productCard-des">{props.description}</p>
      <p className="productPage__productCard-rating">Rating: {props.rating.rate}</p>
      <p className="productPage__productCard-price">Price: ${props.price}</p>
      <div className="productPage__productCard__buttons">
        {cartItem[0] && cartItem[0].count!==0 && <ItemCount {...cartItem[0]} />}
        <button
          className="productPage__productCard__buttons-addToCart"
          style={{ display: cartItem[0] && cartItem[0].count ? "none" : "" }}
          onClick={handleCart}
        >
          Add to cart
        </button>
        <button
          className="productPage__productCard__buttons-addToWishlist"
          onClick={()=>{}}
        >
          Wishlist
        </button>
      </div>
    </>
  );
}

export default ProductCard;
