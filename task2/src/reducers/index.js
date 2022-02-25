import { combineReducers } from "redux";

const displayTodo = (todolist = [], action) => {
  if (action.type === "add") {
    return [...todolist, action.payload];
  } else if (action.type === "dlt") {
    return todolist.filter((todo) => todo !== action.payload);
  } else {
    return todolist;
  }
};

export default combineReducers({
  todo: displayTodo,
});
