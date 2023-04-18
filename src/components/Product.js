import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";

const Product = ({ product }) => {
  const {
    mystate: { cart },
    dispatch,
  } = CartState();
  return (
    <div className="products">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>$ {product.price.split(".")[0]} </span>
            {product.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>{product.deliveryTime} days delivery</div>
            )}
          </Card.Subtitle>
          {cart.some((p) => p.id === product.id) ? (
            <Button               
            onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: product,
              });
            }} variant="danger">Remove From Cart</Button>
          ) : (
            <Button
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                });
              }}
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out Of Stock" : "Add To Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
