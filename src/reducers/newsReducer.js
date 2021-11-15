const initialState = {
    newsList: [],
    activeArticle: {}
  };
  
  export default function newsReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
      case "news/search":
        return { ...state, newsList: [...action.payload]};
      case "news/fetchmore":
          return {...state, newsList: [...state.newsList, ...action.payload]}
      default:
        // If this reducer doesn't recognize the action type, or doesn't
        // care about this specific action, return the existing state unchanged
        return state;
    }
  }
  