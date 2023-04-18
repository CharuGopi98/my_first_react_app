import { ActionTypes } from "../ActionTypes";
const initialState = {
  products: [
    // {
    //   id: 1,
    //   title: "Lizrd",
    //   desc: "  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    // },
  ],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return {
        ...state,
        // products: action.payload,
        ...action.payload,
      };
    case ActionTypes.REMOVED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
