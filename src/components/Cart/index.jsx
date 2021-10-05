import Product from "../Product";
import "./style.css";

const Cart = ({ currentSale }) => {
  const total = currentSale.reduce((amount, item) => {
    return amount + (item.price - item.totalDiscount);
  }, 0);

  return (
    <>
      <div className="Cart">
        {currentSale.map((item, index) => (
          <Product key={index} item={item}></Product>
        ))}
      </div>
      <span className="totalBuy">Total da compra: R$ {total.toFixed(2)}</span>
    </>
  );
};

export default Cart;
