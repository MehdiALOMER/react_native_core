import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

interface DrawerContentProps extends DrawerContentComponentProps {
    // İhtiyaç duyduğunuz özel props'ları buraya ekleyebilirsiniz.
}

const DrawerContent: React.FC<DrawerContentProps> = ({ navigation }) => {

    const closeDrawer = () => {
        navigation.closeDrawer();
    };

    const handleLogout = () => {
        // Çıkış işlemini gerçekleştirin
    };

    return (
        <View>
            <TouchableOpacity onPress={closeDrawer}>
                <Text>Close Drawer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default DrawerContent;