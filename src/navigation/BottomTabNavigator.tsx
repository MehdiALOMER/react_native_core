import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon, { Icons } from '../components/common/Icons';

const Tab = createBottomTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: HomeScreen },
    { route: 'Profile', label: 'Profile', type: Icons.Ionicons, activeIcon: 'person', inActiveIcon: 'person-outline', component: ProfileScreen },
];


const BottomTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="BottomTabNavigator"
            screenOptions={{
                headerShown: false,
            }}
        >
            {TabArr.map((_, index) => (
                <Tab.Screen
                    key={index}
                    name={_.route}
                    component={_.component}
                    options={{
                        headerTitle: "",
                        headerTransparent: true,
                        tabBarIcon: ({ color, size, focused }) => (
                            <Icon name={focused ? _.activeIcon : _.inActiveIcon} size={size} color={color} type={_.type} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;