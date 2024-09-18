import React, {useReducer} from 'react';
import PedidoContext from './pedidoContext';
import pedidoReducer from './pedidoReducer';
import types from '../../types/types';

const PedidoProvider = ({children}) => {
  const initialState = {
    pedidos: [],
  };

  const [state, dispatch] = useReducer(pedidoReducer, initialState);

  const agregarPedido = platillo => {
    dispatch({type: types.pedidoAdd, payload: platillo});
  };

  const eliminarPedido = id => {
    dispatch({type: types.pedidoDelete, payload: id});
  };

  return (
    <PedidoContext.Provider
      value={{
        pedidos: state.pedidos,
        agregarPedido,
        eliminarPedido,
      }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoProvider;
