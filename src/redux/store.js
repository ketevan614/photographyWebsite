import { createStore } from "redux";
import imagesReducer from "./reducer";

const store = createStore(imagesReducer);

export default store;