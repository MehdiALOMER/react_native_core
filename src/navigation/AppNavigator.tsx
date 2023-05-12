/* import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Route } from './route';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Route.home} component={HomeScreen} />
                <Stack.Screen name={Route.login} component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator; */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { Route } from './route';
import LoginScreen from '../screens/LoginScreen';

/* export type RootStackParamList = {
    Home: undefined;
    Profile: { userId: string };
};

const Stack = createStackNavigator<RootStackParamList>(); */

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Route.home} component={HomeScreen} />
      <Stack.Screen name={Route.login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
