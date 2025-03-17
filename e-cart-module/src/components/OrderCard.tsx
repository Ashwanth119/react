import { useState } from "react";
import { Cart } from "../common/Interfaces";
import DisplayOrders from "./DisplayOrders";
import { useSelector } from "react-redux";
import { appState } from "../store/Store";

function OrderCard(props: any) {
  const orderDelivery = useSelector((state:appState)=>state.orderDelivery);
  const { array, orderNumber } = props;
  const [clicked, setClicked] = useState(false);
  const handleClick = (x: boolean) => {
    setClicked(x);
  };
  return (
    <>
      <div className="orderPage__orderCard" onClick={() => handleClick(true)}>
        <div className="orderPage__orderCard__orderImages">
          {array.map((item: Cart, index: number) => {
            if (index > 3) return;
            return (
              <div className="orderPage__orderCard__orderImages-image">
                <img src={item.image}></img>
              </div>
            );
          })}
          {array.length > 4 && (
            <div className="orderPage__orderCard__orderImages-overflow">
              ...+{array.length - 4}
            </div>
          )}
        </div>
        <div className="orderPage__orderCard-date">Delivered on  {orderDelivery[orderNumber].date}</div>
        <div className="orderPage__orderCard-price">Total Price: {orderDelivery[orderNumber].price.toFixed(2)}</div>
      </div>
      
      {clicked ? <div className="orderPage__modal"><div className="overlay"></div><DisplayOrders array={array} handleClick={handleClick} /></div> : ""}
    </>
  );
}

export default OrderCard;
