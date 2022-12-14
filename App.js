
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
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  ); 
}; 

export default App;

