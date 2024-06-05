import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Configuracoes from '../pages/Configuracoes';
import Home from '../pages/Home';
import Usuario from '../pages/Usuario';
import Simulador from '../pages/Simulador';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createStackNavigator();
  
function MyStack() {

  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Simulador" component={Simulador} />

      <Stack.Screen name="Usuario" component={Usuario} />

      <Stack.Screen name="Configuracoes" component={Configuracoes} />

    </Stack.Navigator>
</NavigationContainer>
  );

}

export default MyStack;