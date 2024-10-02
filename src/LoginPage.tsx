import React, {useState} from 'react';
import {useLoginMutation} from "./api/authApi";
import {ERROR} from "./LoadingPage";
import {Button} from "./MyPage";
import styled from "styled-components";
import {Container} from "./App";
import {useNavigate} from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, {isLoading, isError, error}] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({username, password}).unwrap();
            console.log('Logged in successfully:', response);
            navigate('/my-page');
        } catch (err) {
            console.error('Failed to log in:', err);
        }
    };

    return (
        <Container>
            <h1>Register</h1>
            <FORM onSubmit={handleSubmit}>
                <div>
                    <LABEL>
                        Username:
                        <INPUT
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </LABEL>
                </div>
                <div>
                    <LABEL>
                        Password:
                        <INPUT
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </LABEL>
                </div>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log In'}
                </Button>
                {isError && <ERROR>{`Error: ${error}`}</ERROR>}
            </FORM>
        </Container>
    );
};

const FORM = styled.form`
            display: flex;
            flex-direction: column;
            gap: 30px;
            border: darkgrey 1px solid;
            border-radius: 5px;
            padding: 20px;
    `
;

const LABEL = styled.label`
            display: flex;
            gap: 10px;
    `
;

const INPUT = styled.input`
            padding: 5px;
            border: darkgrey 1px solid;
            border-radius: 5px;
    `
;

export default Register;