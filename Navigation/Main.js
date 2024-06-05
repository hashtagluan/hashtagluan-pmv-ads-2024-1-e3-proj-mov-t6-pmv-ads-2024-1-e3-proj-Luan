import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../pages/Home';
import Simulador from '../pages/Simulador';
import Usuario from '../pages/Usuario';
import Configuracoes from '../pages/Configuracoes';
import NovaSimulacao from '../pages/NovaSimulacao';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Simulador" component={NovaSimulacao} options={{ headerShown: false }} />
        <Stack.Screen name="Usuario" component={Usuario} options={{ headerShown: false }} />
        <Stack.Screen name="Configuracoes" component={Configuracoes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
