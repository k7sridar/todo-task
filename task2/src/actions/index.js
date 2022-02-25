const addtodo = (todo) => {
  return {
    type: "add",
    payload: todo,
  };
};

const dlttodo = (todo) => {
  return {
    type: "dlt",
    payload: todo,
  };
};

export { addtodo, dlttodo };
