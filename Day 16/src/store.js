import { createStore } from 'redux';

// Initial state
const initialState = {
  selectedRating: 'Satisfied',
  showMessage: false,
  comment: '',
};

// Reducer
const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_RATING':
      return {
        ...state,
        selectedRating: action.payload,
      };
    case 'SET_SHOW_MESSAGE':
      return {
        ...state,
        showMessage: action.payload,
      };
    case 'SET_COMMENT':
      return {
        ...state,
        comment: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(feedbackReducer);

export default store;