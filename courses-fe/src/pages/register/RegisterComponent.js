import React, { Fragment, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginCheck } from './helper';
import './style.scss';

const RegisterComponent = (props) => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { registerUser } = props;

    const handleSubmit = () => {
        registerUser({name, email, username, password}, navigate);
        setSubmitted();
    }

    useLoginCheck(navigate);

    return (
        <Fragment>
        <div className="register-container col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <div>
            <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                {submitted && !name &&
                    <div className="help-block">Username is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                <label htmlFor="email">Email</label>
                <input type="text" className="form-control" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
                {submitted && !email &&
                    <div className="help-block">Email is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={username} onChange={(e) => {setUsername(e.target.value)}} />
                {submitted && !username &&
                    <div className="help-block">Username is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }
            </div>

            <div className={'form-group' + (submitted && !confirmPassword ? ' has-error' : '')}>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" className="form-control" name="confirmPassword" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} />
                {submitted && !confirmPassword &&
                    <div className="help-block">Password is required</div>
                }
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
                <Link to="/" className="btn btn-link">Login</Link>
            </div>
        </div>
    </div>
    </Fragment>
    );
}

export default RegisterComponent;