// Add items to cart
export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// Delete items from cart
export const DEL = (id) => {
  return {
    type: "DEL_CART",
    payload: id,
  };
};

// remove 1 item from cart
export const REM = (item) => {
  return {
    type: "REM_CART",
    payload: item,
  };
};

export default (ADD, DEL, REM);
