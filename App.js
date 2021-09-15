import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import {getDrinks} from 'api'

import CocktailsScreen from './screens/cocktails'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cocktails" component={CocktailsScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;