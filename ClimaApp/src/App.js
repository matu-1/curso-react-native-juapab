import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioView from './views/InicioView';
import NosotrosView from './views/NosotrosView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'crimson'
          }
        }}
      
      >
        <Stack.Screen 
          name="Home" 
          component={InicioView} 
          options={{
            title: 'Inicio page',
          }}
        />
        <Stack.Screen 
          name="Nosotros" 
          component={NosotrosView} 
          options={({ route }) => ({
            title: route.params.nombre
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
