import { Cart } from "../common/Interfaces";
import './SummaryCard.scss';
function SummaryCard(props:any) {
    const {summaryArray, totalPrice} = props;
  return (
    <div className="summaryCard">
      <h2>Price Details</h2>
      <div className="summaryCard__row">
        <h3 className="summaryCard__row-title">Title</h3>
        <h3 className="summaryCard__row-count">Count</h3>
        <h3 className="summaryCard__row-price">Price</h3>
      </div>
      {summaryArray.map((item: Cart) => {
        return (
          <div className="summaryCard__row" key={item.id}>
            <span className="summaryCard__row-title">
              {item.title}
            </span>
            <span className="summaryCard__row-count">
              {item.count}
            </span>
            <span className="summaryCard__row-price">
              ${item.count * item.price}
            </span>
          </div>
        );
      })}
      <div className="summaryCard-total">
        <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default SummaryCard;
