'use client';
import Link from 'next/link';
import './SignUp.scss';

const SignUp: React.FC = () => {
    return (
        <div className="main">
            <h1>Sign Up</h1>
            <form
                action="http://localhost:8001/signup"
                method="post"
                encType="multipart/form-data"
            >
                <div className="form-group">
                    <label htmlFor="firstname">Firstname:</label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        required
                    />
                </div>
                <button type="submit" className="btn">
                    Sign Up
                </button>
                <p>
                    Already have an account? <Link href="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;
