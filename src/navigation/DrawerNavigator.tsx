import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import DrawerContent from '../components/drawer/DrawerContent';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
            /* overlayColor="transparent" */
            screenOptions={{
                swipeEnabled: false,

                drawerPosition: 'left',
                drawerStyle: {
                    backgroundColor: 'transparent',
                },
                drawerType: "front",
            }}
        >
            <Drawer.Screen name="Settings" component={SettingsScreen} />
            <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;