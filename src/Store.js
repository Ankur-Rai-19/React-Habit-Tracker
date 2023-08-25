import { createStore } from "redux";

// import { rootReducer } from "./Reducers";
import rootReducer from "./Reducers";

const persistentState = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : {};

const store = createStore(rootReducer, persistentState);
console.log("STORE", store);

store.subscribe(() => {
    const state = store.getState();
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
});

export default store;
