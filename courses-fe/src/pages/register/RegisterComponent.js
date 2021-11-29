import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const RegisterComponent = ({ counter=0 }) => {

    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        console.log('Ai da click pe submit');
        setSubmitted(true);
    }
    const handleRegister = () => {
        console.log('Register');
        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Username: ', username);
        console.log('Password: ', password)
        console.log('ConfirmPassword:', confirmPassword);
    };

    return (
        <Fragment>
        <div>Example for redux flow:</div>
        <div>{counter}<button>Increment</button><button>Decrement</button></div>
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
                <label htmlFor="email">Name</label>
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
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }
            </div>
            
            <div className="form-group">
                <button className="btn btn-primary" onClick={handleRegister}>Register</button>
                <Link to="/" className="btn btn-link">Login</Link>
            </div>
        </div>
    </div>
    </Fragment>
    );
}

export default RegisterComponent;