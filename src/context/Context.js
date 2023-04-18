import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = (props) => {
  const { children } = props
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.image(),
    inStock: faker.datatype.number({ min: 0, max: 5 }),
    fastDelivery: faker.datatype.boolean(),
    deliveryTime: Math.floor((Math.random() * 7) + 3),
  }));

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    searchQuery:"",
  })

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  //   for (let i = 0; i< products.length; i++){
  //     console.log(products[i].inStock);
  //   }
  return <Cart.Provider value={{ mystate: state, dispatch, productState, productDispatch }}>{props.children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
