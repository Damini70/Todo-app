import { createStore } from "redux";

const initialState = {
    counter: 0,
    theme: "white",
    color: "black", // Default theme
    previousTheme: "white",
    previousColor: ""
  };
  
  // Reducer
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      case "DECREMENT":
        return { ...state, counter: state.counter - 1 };
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: state.theme === "white" ? "yellow" : "white",
          previousTheme: state.theme,
          color: state.color === "black" ? "red" : "black",
          previousColor: state.color
        };
      default:
        return state;
    }
  };
  

  const store = createStore(counterReducer);

  export default store;