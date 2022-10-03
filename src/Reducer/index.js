import { combineReducers } from "redux";
// import colorReducer from "./colorReducer";
// import countReducer from "./countReducer";
// import cartReduxReducer from "./cartReduxReducer";
// import userReducer from "./userReducer";
import ChineseDiceReducer from "./ChineseDiceReducer";

const rootReducer = combineReducers({
  chineseDice: ChineseDiceReducer,
});

export default rootReducer;
