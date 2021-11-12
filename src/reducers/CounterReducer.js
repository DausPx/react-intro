const initialState = {
  value: 0,
};

export default function CounterReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "increment":
      return { ...state, value: state.value + 1 };
    case "decrement":
        return {...state, value: state.value - 1}
    case 'incrementByAmount':
        return {...state, value: state.value + action.payload}
    // Do something here based on the different types of actions
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}
