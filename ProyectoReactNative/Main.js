import 'react-native-gesture-handler';
import HomePage from './src/HomePage';
import ResultPage from './src/ResultPage';
import DetailPage from './src/DetailPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const MainApp: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{
              title: 'Buscar artículo',
              headerStyle: {
                backgroundColor: '#474141',
                elevation: 15,
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Result"
            component={ResultPage}
            options={{
              title: 'Resultados de la búsqueda',
              headerStyle: {
                backgroundColor: '#474141',
                elevation: 15,
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerTintColor: '#ffffff',
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailPage}
            options={{
              title: 'Detalles del artículo',
              headerStyle: {
                backgroundColor: '#474141',
                elevation: 15,
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerTintColor: '#ffffff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainApp;
