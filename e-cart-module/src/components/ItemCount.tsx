import { useDispatch } from "react-redux";
import { decrementItemCount, incrementItemCount } from "../reducers/Reducer";
import { Cart } from "../common/Interfaces";
import './ItemCount.scss';

function ItemCount(props:Cart) {
    const dispatch = useDispatch();
    const handleDecrement = ()=>{
        dispatch(decrementItemCount(props));
      }
      const handleIncrement = ()=>{
        dispatch(incrementItemCount(props));
      }
  return (
    <div className="itemCount">
        <button className="itemCount-decrement" onClick={handleDecrement}>-</button>
        <span className="itemCount-display">{props.count || 0}</span>
        <button className="itemCount-increment" onClick={handleIncrement}>+</button>
    </div>
  )
}

export default ItemCount