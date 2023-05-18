import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DrawerMenuProps {
    onClose: () => void;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ onClose }) => {
    return (
        <View style={styles.container}>
            <Text>Drawer Menu</Text>
            <Text onPress={onClose}>Close</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
});

export default DrawerMenu;