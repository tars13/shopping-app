import {
  Container,
  Navbar,
  Nav,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  const {
    mystate: { cart },
    dispatch,
    productDispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 75 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping App</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Searc a product"
            className="m-auto"
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <IoMdCart color="white" fontSize="22" />
            <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                  <span className="cartItem" key={product.id}>
                    <img
                      src={product.image}
                      className="cartItemImage"
                      alt={product.name}
                    />
                    <div className="cartItemDetail">
                      <span>{product.name}</span>
                      <span>$ {product.price}</span>
                    </div>
                    <AiTwotoneDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/cart">
                  <Button style={{ width: "95%", margin: "0 10px" }}>
                    Go To Cart
                  </Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
