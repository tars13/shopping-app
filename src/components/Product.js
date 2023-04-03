import { Button, Card } from "react-bootstrap";

const Product = ({ product }) => {
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
          <Button variant="danger">Remove From Cart</Button>
          <Button disabled={!product.inStock}>
            {!product.inStock ? "Out Of Stock" : "Add To Cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
