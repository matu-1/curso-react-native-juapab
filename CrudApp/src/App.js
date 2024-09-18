import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from './views/HomeView';
import ClienteDetalleView from './views/ClienteDetalleView';
import ClienteCreateView from './views/ClienteCreateView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeView} />
        <Stack.Screen
          name="ClienteDetalle"
          component={ClienteDetalleView}
          options={{
            title: 'Cliente',
          }}
        />
        <Stack.Screen
          name="ClienteCreate"
          component={ClienteCreateView}
          options={{
            title: 'Nuevo cliente',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
