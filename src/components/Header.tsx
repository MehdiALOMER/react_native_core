import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #ffffff;
`;

const HeaderTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const HeaderButton = styled.TouchableOpacity`
  padding: 8px;
`;

const HeaderButtonText = styled.Text`
  font-size: 16px;
  color: #000000;
`;

interface HeaderProps {
    onLogout: () => void;
    onDrawerOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout, onDrawerOpen }) => {


    return (
        <HeaderContainer>
            <HeaderButton onPress={onDrawerOpen}>
                <HeaderButtonText>Open Drawer</HeaderButtonText>
            </HeaderButton>
            <HeaderTitle>Welcome, Mehdi</HeaderTitle>
            <HeaderButton onPress={onLogout}>
                <HeaderButtonText>Logout</HeaderButtonText>
            </HeaderButton>
        </HeaderContainer>
    );
};

export default Header;