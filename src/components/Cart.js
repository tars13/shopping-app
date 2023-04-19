import { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import {
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // console.log("cart",cart)

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (accumulate, current) =>
          accumulate + Number(current.price) * current.quantity,
        0
      )
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((product) => (
            <ListGroupItem key={product.id}>
              <Row>
                <Col>
                  <Image src={product.image} fluid rounded />
                </Col>
                <Col>
                  <span>{product.name}</span>
                </Col>
                <Col>$ {product.price}</Col>
                <Col>
                  <Form.Control
                    as="select"
                    value={product.quantity}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          id: product.id,
                          quantity: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(product.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: product,
                      })
                    }
                  >
                    <AiTwotoneDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="summary">
        <span className="title">Subtotal {cart.length} items</span> <br />
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total: $ {total}
        </span>{" "}
        <br />
        <Button type="button">
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
