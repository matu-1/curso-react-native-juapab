import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeView from './views/HomeView';
import MenuView from './views/MenuView';
import PedidoProvider from './context/pedido/PedidoProvider';
import colors from './styles/colors';
import PlatilloProvider from './context/platillo/PlatilloProvider';
import MenuDetalleView from './views/MenuDetalleView';
import OrdenCreateView from './views/OrdenCreateView';
import OrdenResumenView from './views/OrdenResumenView';
import OrdenProgresoView from './views/OrdenProgresoView';
import HeaderAnimaView from './views/HeaderAnimaView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <PlatilloProvider>
      <PedidoProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: 'white',
            }}>
            <Stack.Screen
              options={{
                headerStatusBarHeight: 0,
              }}
              name="Home"
              component={HomeView}
            />
            <Stack.Screen name="Menu" component={MenuView} />
            <Stack.Screen
              options={{title: 'Menu Detalle'}}
              name="MenuDetalle"
              component={MenuDetalleView}
            />
            <Stack.Screen
              options={{title: 'Ordenar Platillo'}}
              name="OrdenCreate"
              component={OrdenCreateView}
            />
            <Stack.Screen
              options={{title: 'Resumen Pedido'}}
              name="OrdenResumen"
              component={OrdenResumenView}
            />
            <Stack.Screen
              options={{title: 'Progreso Pedido'}}
              name="OrdenProgreso"
              component={OrdenProgresoView}
            />
            <Stack.Screen
              options={{title: 'Header animated scroll', headerShown: false}}
              name="HeaderAnima"
              component={HeaderAnimaView}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PedidoProvider>
    </PlatilloProvider>
  );
};

export default App;
