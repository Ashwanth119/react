import { useState } from "react";
import { Cart } from "../common/Interfaces";
import "./DisplayOrders.scss";
import SummaryCard from "./SummaryCard";

/* 
    DisplayOrders accepts the props
        --> array from the OrderCard component
    --> Actually the array contains the entire cart data, which is present at the time of place order in CartPage component.
*/
function DisplayOrders(props: any) {
  const array = props.array;
  const [clicked, setClicked] = useState(false);
  const handleClose = () => {
    setClicked((prev) => !prev);
    props.handleClick(false);
  };
  let totalPrice:number=0;
  return (
    <div className="displayOrder" style={{ display: clicked ? "none" : "" }}>
      <div className="displayOrder-close"><button onClick={handleClose}>X</button></div>
      <div className="displayOrder__section">
      {array.map((item: Cart) => {
        totalPrice+=item.price * item.count
        return <div className="displayOrder__section__cart">
          <div className="displayOrder__section__cart__img"><div className="displayOrder__section__cart__img-imgDiv">
            <img src={item.image}></img>
          </div></div>
          <h3 className="displayOrder__section__cart-title">{item.title}</h3>
          <div className="displayOrder__section__cart-summary">
            <p>Count: {item.count}</p>
            <p>Price: ${item.price * item.count}</p>
          </div>
        </div>
})}
      </div>
      <div className="displayOrder-summary"><SummaryCard summaryArray={array} totalPrice={totalPrice} /></div>
    </div>
  );
}

export default DisplayOrders;
