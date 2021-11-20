import { createStore } from "redux";
const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

const { createStore } = require("redux");
// 초기 state 정의
const initState = {
  name: "이원구",
  posts: [],
};

// action
const changeName = (name) => {
  return {
    type: "CHANGE_NAME",
    name,
  };
};
const addPost = (post) => {
  return {
    type: "ADD_POST",
    post,
  };
};
// reducer -> pure function
const reducer = (prevState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...prevState,
        name: action.name,
      };
    case "ADD_POST":
      return {
        ...prevState,
        posts: [...prevState.posts, action.post],
      };
    default:
      return prevState;
  }
};
// store
const store = createStore(reducer, initState);

console.log(store.getState());
store.dispatch(changeName("정지우"));
console.log(store.getState());
store.dispatch(addPost("1"));
store.dispatch(addPost("2"));
console.log(store.getState());
