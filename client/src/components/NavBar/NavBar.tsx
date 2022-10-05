import React from 'react'
import { Link } from 'react-router-dom';
import logoblack from '../../images/logob.png';
import {
    Container,
    Wrapper,
    Left,
    Center,
    Logo,
    Right,
    MenuItem,
    ButtonLogout
} from './NavBarStyles';



const NavBar = () => {

    const DataUser = JSON.parse(localStorage.getItem('user') || '{}')

    if (DataUser.userName) {
        var userName = DataUser.userName
    }

    const handleRemoveUser = () => {
        localStorage.removeItem('user');
        window.location.reload();
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <img src={logoblack} alt="Logo" width="35" />
                    </Link>
                </Left>
                <Center><Logo>MyBudget.</Logo></Center>
                {DataUser.userName ? (
                    <Right>
                        <h4>Hi {userName}</h4>
                        <ButtonLogout onClick={handleRemoveUser}>Log Out</ButtonLogout>
                    </Right>
                ) : (
                    <Right>
                        <Link to="/register">
                            <MenuItem>Register</MenuItem>
                        </Link>
                        <Link to="/login">
                            <MenuItem>Login</MenuItem>
                        </Link>
                    </Right>
                )}
            </Wrapper>
        </Container>
    )
}

export default NavBar
