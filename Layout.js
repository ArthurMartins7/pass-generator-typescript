import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/login/LoginScreen';
import RegisterScreen from './src/screens/register/RegisterScreen';
import TestApi from './src/screens/testApi/TestApiScreen';
import { useAuth } from './src/hooks/useAuth';

const Stack = createNativeStackNavigator();

export default function Layout() {

const { authState, onLogout } = useAuth();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TestApi" component={TestApi} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerTitle: `Entrar`}} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
