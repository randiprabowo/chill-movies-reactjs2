const initialState = {
    items: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return { ...state, items: [...state.items, action.payload] };
      case 'EDIT_ITEM': {
        const updatedItems = [...state.items];
        updatedItems[action.payload.index] = action.payload.item;
        return { ...state, items: updatedItems };
      }
      case 'DELETE_ITEM':
        return { ...state, items: state.items.filter((_, index) => index !== action.payload) };
      default:
        return state;
    }
  };
  
  export default reducer;