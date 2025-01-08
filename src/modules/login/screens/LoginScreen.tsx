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
                </LimitedContainer>
            </LoginContainer>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
