//return dummy data
import PRODUCTS from "../../data/dummy-data";

//initial state
const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "ul"),
};

export default (state = initialState, action) => {
  return state;
};
