import styled from "styled-components";
import { Space, Typography } from 'antd';

const {Title,  Link} = Typography;


export const ContainerLoginScreen = styled.div`
    width: 100%;
    display: flex;
    justify-content: right;
`;


export const BackgroundImage = styled.img`
    position: absolute;    
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const LogoImage = styled.img`
    width: 202px;
`;

export const TitleLogin = styled(Title)`
    color: #006397 ;
`;


export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D9D9D9;
    padding: 22px;
    width: 100%;
    max-width: 646px;
    height: 100vh;
    
`;

export const LimitedContainer = styled.div`
    width: 100%;
    max-width: 498px;
    display: flex;
    align-items: center;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
`;