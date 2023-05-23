import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import NumberToTextConverter from '../screens/NumberToTextConverter';

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="MainNavigator"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="NumberToTextConverter" component={NumberToTextConverter} />
            <Stack.Screen name="MaterialBottomTabNavigator" component={MaterialBottomTabNavigator} />
            <Stack.Screen name="MaterialTopTabNavigator" component={MaterialTopTabNavigator} />
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
};

export default MainNavigator;