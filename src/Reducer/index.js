import { combineReducers } from "redux";
// import colorReducer from "./colorReducer";
// import countReducer from "./countReducer";
// import cartReduxReducer from "./cartReduxReducer";
// import userReducer from "./userReducer";
import ChineseDiceReducer from "./ChineseDiceReducer";

const rootReducer = combineReducers({
  // count: countReducer,
  // color: colorReducer,
  // cartRedux: cartReduxReducer,
  // userManagement: userReducer,
  chineseDice: ChineseDiceReducer,
});

export default rootReducer;
