import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;