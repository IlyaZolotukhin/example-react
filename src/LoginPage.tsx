import React, { useState } from 'react';
import {useLoginMutation} from "./api/authApi";
import {ERROR} from "./LoadingPage";
import {Button} from "./MyPage";

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, { isLoading, isError, error }] = useLoginMutation();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login({ username, password }).unwrap();
            console.log('Logged in successfully:', response);
        } catch (err) {
            console.error('Failed to log in:', err);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in...' : 'Log In'}
                </Button>
                {isError && <ERROR>Error</ERROR>}
            </form>
        </div>
    );
};

export default Register;