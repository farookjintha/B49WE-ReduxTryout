let initialState = 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      console.log("Incrementing");
      return state + 1;
    }
    case "DECREMENT": {
      console.log("Decrementing");
      return state - 1;
    }
    case "RESET": {
      console.log("Resetting");
      return 0;
    }

    default:
      return state;
  }
};

export default counterReducer;
