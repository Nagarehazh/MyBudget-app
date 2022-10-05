import styled from "styled-components";

const Container = styled.div`
    height: 60px;
    margin-bottom: 20px;
    @media ${(props) => props.theme.breakpoints.sm} {
        height: 50px;
        margin-top: 15px;
    }
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: 10px;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 24px;
    }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media ${(props) => props.theme.breakpoints.sm} {
        flex: 2;
        justify-content: center;
    }
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
    }
`;

const ButtonLogout = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    margin-left: 25px;
    @media ${(props) => props.theme.breakpoints.sm} {
        font-size: 12px;
    }
`;

export {
    Container,
    Wrapper,
    Left,
    Center,
    Logo,
    Right,
    MenuItem,
    ButtonLogout
  };
  