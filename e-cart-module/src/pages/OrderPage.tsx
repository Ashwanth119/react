import { useSelector } from "react-redux";
import { appState } from "../store/Store";
import OrderCard from "../components/OrderCard";
import "./OrderPage.scss";
import NavBar from "../components/NavBar";
import { Cart } from "../common/Interfaces";
function OrderPage() {
  let userIndex = useSelector((state: appState) => state.userIndex);
  let ordersArray = useSelector((state: appState) => state.ordersArray);
  return (
    <>
      <NavBar isOrder={true}/>
      {userIndex!=-1 ? <div className="orderPage">
        <h1>Orders</h1>
        {ordersArray.map((item:Cart[],index:number) => (
          <OrderCard array={item} orderNumber={index}/>
        ))}
      </div> : <h3>Login to view the Orders</h3>}
    </>
  );
}

export default OrderPage;
