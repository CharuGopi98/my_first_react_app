import { ActionTypes } from "../ActionTypes";

export const setProductsAction = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProductsAction = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeProductsAction = () => {
  return { type: ActionTypes.REMOVED_PRODUCTS };
};
