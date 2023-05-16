import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = () => {

    const handleLogout = () => {
        // Çıkış işlemleri
    };

    const handleDrawerOpen = () => {
        // Drawer'ın açılmasını sağlayan kod
    };


    return (
        <View>
            <Header onLogout={handleLogout} onDrawerOpen={handleDrawerOpen} />
            {/* Diğer profile ekranı içeriği */}
        </View>
    );
};

export default ProfileScreen;