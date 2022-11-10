import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hook/useTitle';

const SignUp = () => {
    useTitle("Signup")
    const { createUser } = useContext(AuthContext);
    const handleSignup = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
        .catch(err => console.error(err))
    }
    return (
        <div className='container mx-auto my-10'>
            <form onSubmit={handleSignup}>
                <div className="min-h-screen bg-emerald-50">
                    <div className="hero-content flex-col my-5">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Sign Up!</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Your photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />

                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default SignUp;