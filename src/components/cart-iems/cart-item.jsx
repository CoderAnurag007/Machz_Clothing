import "./cart-items.scss";

const CartItem = ({ Cartitem }) => {
  const { name, quantity, price, imageUrl } = Cartitem;
  console.log(name + "from cartitem");
  return (
    <>
      <div className="cart-item-container">
        <img src={imageUrl} alt="" />
        <div className="item-details">
          <span className="name">{name}</span>
          <span className="price">
            {quantity}*${price}={quantity * price}
          </span>
        </div>
      </div>
    </>
  );
};

export default CartItem;
