import Link from 'next/link';
import React from 'react';
import './Login.scss';

const Login: React.FC = () => {
    return (
        <div className="main">
            <h1>Login</h1>
            <form action="http://localhost:8001/login" method="post">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                />
                <div className="wrap">
                    <button type="submit">Login</button>
                    <Link href={'/signup'}>Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
