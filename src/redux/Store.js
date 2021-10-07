import {combineReducers, createStore} from "redux";
import todo_reducer from "./todo-reduser";


let reducers = combineReducers({
    todoPage: todo_reducer,
});

let store = createStore(reducers);

window.store = store;

export default store;