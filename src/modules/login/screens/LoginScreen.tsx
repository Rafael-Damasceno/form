import { useState } from 'react';
import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/input';
import {
    BackgroundImage,
    LoginContainer,
    LimitedContainer,
    LogoImage,
    ContainerLoginScreen,
    TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        alert(`${username}, ${password}`);
    };

    return (
        <ContainerLoginScreen>
            <LoginContainer>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <TitleLogin level={2} type="secondary">
                        LOGIN
                    </TitleLogin>
                    <Input
                        title="USUÁRIO"
                        margin="35px 0px 0px"
                        onChange={handleUsername}
                        value={username}
                    />
                    <Input
                        type='password'
                        title="SENHA"
                        margin="35px 0px 0px"
                        onChange={handlePassword}
                        value={password}
                    />
                    <Button
                        type="primary"
                        margin="64px 0px 16px 0px"
                        onClick={handleLogin}
                    >
                        ENTRAR
                    </Button>
                </LimitedContainer>
            </LoginContainer>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
