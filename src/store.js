import { createStore } from "redux";
import reducer from "./reducer";

const store= createStore(reducer);

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1"
  }
});
store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
});

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 2
  }
});


export default store;