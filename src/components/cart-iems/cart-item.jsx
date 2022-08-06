import {
  CartitemImage,
  CartItemContainer,
  ItemDetail,
  Name,
} from "./cart-items";

const CartItem = ({ Cartitem }) => {
  const { name, quantity, price, imageUrl } = Cartitem;
  console.log(name + "from cartitem");
  return (
    <>
      <CartItemContainer>
        <CartitemImage src={imageUrl} alt="" />
        <ItemDetail>
          <Name>{name}</Name>
          <span>
            {quantity}*${price}={quantity * price}
          </span>
        </ItemDetail>
      </CartItemContainer>
    </>
  );
};

export default CartItem;
