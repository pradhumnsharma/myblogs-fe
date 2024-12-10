'use client';

import { setLocalStorage } from '@/utils/commonHelper';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './Login.scss';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const route = useRouter();

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();
        if (!username || !password)
            return toast.error('Please provide username and password');
        const response = await fetch('http://localhost:8001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        }).then((res) => res.json());

        if (response.success) {
            console.log(response);
            toast.success(response.message);
            setLocalStorage('user', response.token);
            document.cookie = `token=${response.token}; max-age=3600; secure; samesite=strict`;
            route.push('/blogs');
        }
    };

    return (
        <div className="main">
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit} method="POST">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    value={username}
                    id="username"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    value={password}
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
