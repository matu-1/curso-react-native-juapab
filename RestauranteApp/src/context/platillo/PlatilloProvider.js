import React, {useReducer} from 'react';
import PlatilloContext from './platilloContext';
import platilloReducer from './platilloReducer';
import {db} from '../../firebase/firebaseConfig';
import types from '../../types/types';

const PlatilloProvider = ({children}) => {
  const initialState = {
    platillos: [],
    platillo: null,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(platilloReducer, initialState);

  const getAllPlatillos = () => {
    dispatch({type: types.platilloIsLoading});

    try {
      db.collection('platillos')
        .where('disponible', '==', true)
        .onSnapshot(snapshot => {
          let platillos = snapshot.docs.map(itemSnap => ({
            id: itemSnap.id,
            ...itemSnap.data(),
          }));

          platillos = platillos.sort((a, b) => {
            if (a.categoria > b.categoria) return 1;
            if (a.categoria < b.categoria) return -1;
            return 0;
          });

          dispatch({type: types.platilloGetAll, payload: platillos});
        });
    } catch (error) {
      console.warn(error);
    }
  };

  const activePlatillo = platillo => {
    dispatch({type: types.platilloActive, payload: platillo});
  };

  return (
    <PlatilloContext.Provider
      value={{
        isLoading: state.isLoading,
        platillos: state.platillos,
        platillo: state.platillo,
        getAllPlatillos,
        activePlatillo,
      }}>
      {children}
    </PlatilloContext.Provider>
  );
};

export default PlatilloProvider;
