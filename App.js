
import React from 'react';
import DetailsScreen from './src/views/screens/DetailsScreen';
import HomeScreen from './src/views/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="OnBoard">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  ); 
}; 

export default App;

// gen 6 vs 6 
// exodus 34 vs 14 
// deut 28 vs 54 - 57
