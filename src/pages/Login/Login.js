import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { SignIn, googleProviderLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                // toast.success('Successfully created!');
            })
            .catch(error => console.error(error))
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        SignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        .catch(err => console.error(err))
    }
    return (
        <div className='container mx-auto my-10'>
            <form onSubmit={handleLogin}>
                <div className="hero min-h-screen bg-emerald-50">
                    <div className="hero-content flex-col ">
                        <div className="text-center my-5">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span  className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <div>Don't have an account ? Please  <Link to={"/signup"} className="label-text-alt link link-hover font-bold"> Sign Up</Link></div>

                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button> <br />
                                    <h2 className='text-xl text-center'> or login with google </h2> <br />
                                    <button onClick={ googleLogin} className="btn btn-outline btn-accent"><FaGoogle></FaGoogle></button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Login;