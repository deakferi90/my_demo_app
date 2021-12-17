import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginCheck } from './helper';
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = ({loginUser}) => {
    const navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const notify = () => toast("Incorrect username or password !");

    const handleLogin = () => {
        setSubmitted(true);
        loginUser({username, password}, navigate);
    }

    const onClick = () => {
        handleLogin();
        notify();
    }

    useLoginCheck(navigate);

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
                    <button className="btn btn-primary" onClick={onClick}>Login</button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </div>
            <ToastContainer autoClose={2000}/>
        </div>
    );
}

export default LoginPage;