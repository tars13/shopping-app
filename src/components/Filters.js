import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";

const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, sort},
    productDispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check
          type={`radio`}
          label={`Ascending`}
          id={`ascending`}
          name={`group-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          type={`radio`}
          label={`Descending`}
          id={`descending`}
          name={`group-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          type={`checkbox`}
          label={`Exclude Out Of Stock`}
          id={`excOOStock`}
          name={`group-1`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_STOCK",
            })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          type={`checkbox`}
          label={`Fast Delivery Only`}
          id={`fastDelivery`}
          name={`group-1`}
          onChange={() =>
            productDispatch({
              type: "FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
      </span>
      <span>
        <Button
          variant="light"
          onClick={() =>
            productDispatch({
              type: "CLEAR_FILTERS",
            })
          }
        >
          Clear filter
        </Button>
      </span>
    </div>
  );
};

export default Filters;
