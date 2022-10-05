import styled from 'styled-components';


const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
`;

const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 400px;
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const LoginTitle = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
`;

const LoginInput = styled.input`
    width: 300px;
    height: 40px;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
`;

const LoginButton = styled.button`
    width: 300px;
    height: 40px;
    margin-bottom: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: #008080;
        transition: 0.3s;
        transform: scale(1.05);
    }

`;

const LoginError = styled.div`
    width: 300px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background-color: #f5f5f5;
    color: #ff0000;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
`;

const LogoLogin = styled.img`
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
`;




export {
    LoginContainer,
    LoginCard,
    LoginTitle,
    LoginInput,
    LoginButton,
    LoginError,
    LogoLogin
};
