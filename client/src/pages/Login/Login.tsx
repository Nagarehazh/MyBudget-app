import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logoblack from '../../images/logob.png'
import {
    LoginContainer,
    LoginCard,
    LoginTitle,
    LoginInput,
    LoginButton,
    LoginError,
    LogoLogin
} from './LoginStyles';
import { useLoginMutation } from '../../redux/serverCall';


const Login = () => {
    const [login] = useLoginMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await login({ email, password });
        
        if ((data as any).error) {
            setError((data as any).error.data.message + ', try again');
        }

        if ((data as any).data) {
            setError('');
                       
            localStorage.setItem('user', JSON.stringify((data as any).data.user.dataValues));

            navigate('/');
        }

    };

    return (
        <LoginContainer>
            <LoginCard>
                {error && <LoginError>{error}</LoginError>}
                <LogoLogin src={logoblack}></LogoLogin>
                <LoginTitle>Log In</LoginTitle>
                <form onSubmit={handleSubmit}>
                    <LoginInput
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <LoginInput
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <LoginButton type="submit">
                        Log In
                    </LoginButton>
                </form>
                <Link to="/register">Don't have an account? Sign Up</Link>
            </LoginCard>
        </LoginContainer>
    );
};

export default Login;