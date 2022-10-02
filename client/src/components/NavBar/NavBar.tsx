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
} from './NavBarStyles';

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <img src={logoblack} alt="Logo" width="35" />
                    </Link>
                </Left>
                <Center><Logo>MyBudget.</Logo></Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default NavBar
