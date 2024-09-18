import types from '../../types/types';

const platilloReducer = (state, action) => {
  switch (action.type) {
    case types.platilloIsLoading:
      return {
        ...state,
        isLoading: true,
      };
    case types.platilloGetAll:
      return {
        ...state,
        platillos: action.payload,
        isLoading: false,
      };
    case types.platilloActive:
      return {
        ...state,
        platillo: action.payload,
      };
    default:
      return state;
  }
};

export default platilloReducer;
