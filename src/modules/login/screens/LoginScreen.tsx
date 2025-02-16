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
    return (
        <ContainerLoginScreen>
            <LoginContainer>
                <LimitedContainer>
                    <LogoImage src="./logo.png" />
                    <TitleLogin level={2} type='secondary'>LOGIN</TitleLogin>
                    <Input title="USUÁRIO" />
                    <Input title="SENHA" />
                    <Button type='primary' margin='64px 0px 16px 0px'> ENTRAR </Button>
                </LimitedContainer>
            </LoginContainer>
            <BackgroundImage src="./background.png" />
        </ContainerLoginScreen>
    );
};

export default LoginScreen;
