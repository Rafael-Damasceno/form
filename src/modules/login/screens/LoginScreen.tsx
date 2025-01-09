import Input from '../../../shared/inputs/input/input';
import {
    BackgroundImage,
    LoginContainer,
    LimitedContainer,
    LogoImage,
    ContainerLoginScreen,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
    return (
        <ContainerLoginScreen>
            <LoginContainer>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <Input title="USUÁRIO" />
                    <Input title="SENHA" />
                </LimitedContainer>
            </LoginContainer>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
