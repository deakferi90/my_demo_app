import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './style.scss';

const RegisterComponent = ({ registerUser }) => {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const notify = () => toast("User successfully registered!");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        registerUser({ name, email, username, password }, navigate);
        notify();
        setTimeout(() => navigate('/login'), 2000);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="register-container col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <div>
                    <div className={'form-group' + (submitted && !name ? ' has-error' : '')}>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                        {submitted && !name &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        {submitted && !email &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/" className="btn btn-link">Login</Link>
                    </div>
                </div>
            </div>
            <ToastContainer
                className='success-toast'
                autoClose={2000}
                hideProgressBar={true}
            />
        </form>
    );
}

export default RegisterComponent;