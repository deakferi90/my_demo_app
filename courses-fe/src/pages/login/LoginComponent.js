import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';

const LoginPage = ({loginUser}) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleLogin = () => {
        loginUser({username, password}, navigate);
    }

    useEffect(() => {
        const user = localStorage.getItem('USER');
        if(user) {
            navigate('/dashboard');
        }
    })

    return (
        <div className="login-container col-md-6 col-md-offset-3">
            <h2>Login</h2>
            <div>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={(e) => setUserName(e.target.value)} />
                    {submitted && !username &&
                        <div className="help-block">Username is required</div>
                    }
                </div>
                <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {submitted && !password &&
                        <div className="help-block">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;