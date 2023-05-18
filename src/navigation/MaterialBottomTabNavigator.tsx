import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon, { Icons } from '../components/common/Icons';
import Colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();

const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: HomeScreen, tabBarColor: Colors.blue100 },
    { route: 'Profile', label: 'Profile', type: Icons.Ionicons, icon: 'person', component: ProfileScreen, tabBarColor: Colors.red900 },
];


const MaterialBottomTabNavigator = () => {

    return (
        <Tab.Navigator
            initialRouteName="MaterialBottomTabNavigator"
        >
            {TabArr.map((_, index) => (
                <Tab.Screen
                    key={index}
                    name={_.route}
                    component={_.component}
                    options={{
                        tabBarColor: _.tabBarColor,
                        tabBarIcon: ({ color }) => (
                            <Icon name={_.icon} type={_.type} color={color} />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default MaterialBottomTabNavigator;