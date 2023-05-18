import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon, { Icons } from '../components/common/Icons';
import Colors from '../constants/Colors';

const Tab = createMaterialTopTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Ionicons, activeIcon: 'grid', inActiveIcon: 'grid-outline', component: HomeScreen },
    { route: 'Profile', label: 'Profile', type: Icons.Ionicons, activeIcon: 'person', inActiveIcon: 'person-outline', component: ProfileScreen },
];


const MaterialTopTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="MaterialTopTabNavigator"
            screenOptions={{
                /* swipeEnabled: false, */
                tabBarShowLabel: false,
                tabBarIndicatorStyle: {
                    position: 'absolute',
                    top: 0,
                    height: 6,
                    backgroundColor: Colors.primary,
                },
                tabBarItemStyle: { flexDirection: 'row' },
                // tabBarStyle: { backgroundColor: 'powderblue' },
                // tabBarScrollEnabled: true,
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.black
            }}
        >
            {TabArr.map((_, index) => (
                <Tab.Screen
                    key={index}
                    name={_.route}
                    component={_.component}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Icon name={focused ? _.activeIcon : _.inActiveIcon} color={color} type={_.type} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default MaterialTopTabNavigator;