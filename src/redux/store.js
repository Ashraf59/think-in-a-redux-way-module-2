import {applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, myLogger)));


export default store;