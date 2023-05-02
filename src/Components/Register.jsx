import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, CreateGitUser, CreateGoogleUser } = useContext(AuthContext)

    const GitSign = ()=>{
        CreateGitUser()
    }
    const GoogleSign = ()=>{
        CreateGoogleUser()
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length <= 6) {
            setError('Password Should be 6 caracter')
                  }
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const logg = result.user;
                console.log(logg)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col ">
                <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                <div>
                    <button onClick={GitSign} className='btn text-black bg-white hover:text-white'><BsGithub className='text-2xl mr-2'/> Sign In with Github</button>
                    <button onClick={GoogleSign} className='btn bg-white text-black hover:text-white'><FcGoogle className='text-2xl mr-2 '/> Sign In with Google</button>
                </div>

                <div>
                    <h3 className='text-3xl font-semibold'>Or</h3>
                </div>
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary disabled:">Login</button>
                            </div>
                            <div>
                                <h2>Allready have an accunt? <Link to='/login'>Login</Link></h2>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;