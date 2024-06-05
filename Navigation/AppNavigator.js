import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Simulador from '../pages/Simulador';
import NovaSimulacao from '../pages/NovaSimulacao';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Simulador" component={Simulador} options={{ headerShown: false }} />
        <Stack.Screen name="NovaSimulacao" component={NovaSimulacao} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;