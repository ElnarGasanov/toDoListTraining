import {combineReducers, createStore} from "redux";
import todo_reducer from "./todo-reduser";


let reducers = combineReducers({
    todo_reducer,
});

let store = createStore(reducers);

window.store = store;

export default store;