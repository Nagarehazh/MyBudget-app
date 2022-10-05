import React, { useState, useEffect } from 'react';
import {
    RegistarContainer,
    RegistarCard,
    RegistarTitle,
    RegistarInput,
    RegistarButton,
    LogoLogin
} from './RegisterStyles';
import logoblack from '../../images/logob.png'
import { useRegisterMutation } from '../../redux/serverCall';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [register] = useRegisterMutation();
    const navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await register({ userName, email, password  });
        
        if ((data as any).data ){

            localStorage.setItem('user', JSON.stringify((data as any).data.user));
            navigate('/');
        }


    };




    useEffect(() => {
        if (password !== passwordConfirm) {
            setError('Passwords do not match');
        }

        if (password === passwordConfirm) {
            setError('');
        }


    }, [password, passwordConfirm])

    return (
        <RegistarContainer>
            <RegistarCard>
                <LogoLogin src={logoblack}></LogoLogin>
                <RegistarTitle>Register</RegistarTitle>
                <form onSubmit={handleSubmit}>
                    <RegistarInput
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <RegistarInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <RegistarInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <RegistarInput
                        type="password"
                        placeholder="Confirm Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        required
                    />
                    {error ?
                        <React.Fragment>
                            <p>{error}</p>
                        </React.Fragment>
                        :
                        <RegistarButton>Register</RegistarButton>
                    }
                </form>
            </RegistarCard>
        </RegistarContainer>
    )
}

export default Register