import React from 'react';
import { View, Text } from 'react-native';
import MyHeader from '../components/MyHeader';

const ProfileScreen = (navigation: any) => {


    return (
        <View>
            {/* Diğer profile ekranı içeriği */}
            <MyHeader
                menu
                onPressBack={() => navigation.goBack()}
                title="Profile"
                right="more-vertical"
                onRightPress={() => console.log('right')}
                rightComponent={
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 5 }}>Logout</Text>
                    </View>
                }
            />
        </View>
    );
};

export default ProfileScreen;