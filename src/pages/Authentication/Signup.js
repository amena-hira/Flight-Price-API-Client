import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background from '../../images/background.webp';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
            .then(result => {
                console.log(result);
                navigate('/');
                toast.success('Sign up successfully!!!')
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-semibold">
                        Sign Up
                    </h1>

                    <form onSubmit={handleSignUp}>
                        <div className="form-control md:w-96">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Email" name='email' className="input input-bordered border-white rounded-full shadow text-white bg-transparent" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered border-white rounded-full shadow text-white bg-transparent" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover text-white">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-cyan-600 hover:bg-cyan-950 text-white border-none rounded-full">
                                Signup
                            </button>
                        </div>
                    </form>

                    <p className='pt-5'>Have an account? <Link to='/login' className='btn-link text-info hover:text-slate-900'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;