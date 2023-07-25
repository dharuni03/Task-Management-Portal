// reducers.js

const initialState = {
    selectedRating: '',
    showMessage: false,
    comment: '',
    name: '',
    email: '',
    contact: '',
  };
  
  const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_RATING':
        return { ...state, selectedRating: action.payload };
      case 'SET_SHOW_MESSAGE':
        return { ...state, showMessage: action.payload };
      case 'SET_COMMENT':
        return { ...state, comment: action.payload };
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_CONTACT':
        return { ...state, contact: action.payload };
      default:
        return state;
    }
  };
  
  export default feedbackReducer;
  