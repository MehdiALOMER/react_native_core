import React, { useEffect } from 'react';
import { Alert, ActivityIndicator, Text } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components/native';
import { loginRequest } from '../store/actions/authActions';
import { User } from '../types/stateTypes';
import { StorageService } from "../utils/storage";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border-width: 1px;
  border-color: #ccc;
`;

const Button = styled.Button``;

interface LoginScreenProps {
    loading: boolean;
    error: string | null;
    login: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ loading, error, login }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    useEffect(() => {
        console.log("LoginScreen ::::::::::::::::::::::::::::::")
        checkLogin();
    }, []);

    async function checkLogin() {
        let token = await StorageService.getItem('token');
        console.log("token :::::::: ", token);
    }

    const handleLogin = () => {
        if (username && password) {
            const user: User = {
                username,
                password,
            };
            login(user);
        } else {
            Alert.alert('Error', 'Please enter username and password');
        }

    }

    return (
        <Container>
            <Input placeholder="Username" onChangeText={setUsername} />
            <Input placeholder="Password" onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
            {loading && <ActivityIndicator />}
            {error && <Text>{error}</Text>}
        </Container>
    );
};

const mapStateToProps = (state: any) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error,
});

const mapDispatchToProps = {
    login: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);