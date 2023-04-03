import {
  Container,
  Navbar,
  Nav,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 75 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Shopping App</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl style={{ width: 500 }} placeholder="Searc a product" />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <IoMdCart color="white" fontSize="22" />
            <Badge>{10}</Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <span style={{ padding: 10 }}>Cart is empty!</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
