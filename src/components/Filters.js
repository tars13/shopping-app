import { Button, Form } from "react-bootstrap";

const Filters = () => {
  return (
    <div className="filters">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check
          type={`radio`}
          label={`Ascending`}
          id={`ascending`}
          name={`group-1`}
        />
      </span>
      <span>
        <Form.Check
          type={`radio`}
          label={`Descending`}
          id={`descending`}
          name={`group-1`}
        />
      </span>
      <span>
        <Form.Check
          type={`checkbox`}
          label={`Exclude Out Of Stock`}
          id={`excOOStock`}
          name={`group-1`}
        />
      </span>
      <span>
        <Form.Check
          type={`checkbox`}
          label={`Fast Delivery Only`}
          id={`fastDelivery`}
          name={`group-1`}
        />
      </span>
      <span>
      <Button variant="light">Clear filter</Button>
      </span>
    </div>
  );
};

export default Filters;
