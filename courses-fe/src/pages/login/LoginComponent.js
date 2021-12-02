import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const LoginPage = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const { increment, decrement, model } = props;
    const { count } = model;
    return (
        <div className="login-container col-md-6 col-md-offset-3">
            <div className='math-problem'>
                <div>Example for redux flow:</div>
                <div><button onClick={increment}>Increment</button><button onClick={decrement}>Decrement</button></div>
                {count}
            </div>
            <h2>Login</h2>
            <form name="form" onSubmit={handleSubmit}>
                <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    {submitted && !userName &&
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
                    <button className="btn btn-primary">Login</button>
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;