import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { selectedProductReducer } from "./ProductReducer";

export const rootReducer = combineReducers({
  PRODUCTREDUCER: productReducer,
  SELECTEDREDUCER: selectedProductReducer,
});
