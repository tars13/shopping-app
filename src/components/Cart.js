import { CartState } from "../context/Context";
import {
  ListGroup,
} from "react-bootstrap";

const Cart = () => {
  const {
    mystate: { cart },
    dispatch,
  } = CartState;

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((product) => (
            <span>{product.name}</span>
            ))}
        </ListGroup>
      </div>
    </div>
  )
};

export default Cart;
