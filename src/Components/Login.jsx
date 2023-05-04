import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const [succes, setSuccess] = useState('')
    const { loginUser, } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location)
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(password)
       
         if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at lease one Uppercase")
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError("Please add at lease one number")
            return;
        }
        else if (!/(?=.*[$ # &*@])/.test(password)) {
            setError("Please add at lease one Special carecter")
            return;
        }

        else if (password.length < 6) {
            setSuccess('6 caracter need');
            return;
        }


        console.log(succes)
        loginUser(email, password)
            .then(result => {
                const logg = result.user;
                console.log(logg);
                event.target.reset()
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <h2 className='text-red-500'>{succes}</h2>
                                <h2 className='text-red-500'>{error}</h2>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <h2>New user? <Link to='/register'>Register</Link></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;