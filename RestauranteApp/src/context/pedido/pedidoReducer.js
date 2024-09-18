import types from '../../types/types';

const pedidoReducer = (state, action) => {
  switch (action.type) {
    case types.pedidoAdd:
      return {
        ...state,
        pedidos: [...state.pedidos, action.payload],
      };
    case types.pedidoDelete:
      return {
        ...state,
        pedidos: state.pedidos.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default pedidoReducer;
