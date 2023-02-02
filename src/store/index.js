import { combineReducers, createStore } from "redux";
import { basketReducer } from './basketReducer';
import { visibleReducer } from './visibleReducer';
import { existsReducer } from "./existsReducer";

const rootClasses = combineReducers({
    basket: basketReducer,
    visible: visibleReducer,
    exists: existsReducer
})


export const store = createStore(rootClasses);