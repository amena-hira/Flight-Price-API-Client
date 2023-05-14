import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../images/background.webp';
import { FcHome } from "react-icons/fc";

const Signup = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <div className='flex justify-end'>
                        <Link to='/' className="text-5xl font-semibold tooltip" data-tip="Home">
                            <FcHome></FcHome>
                        </Link>
                    </div>
                    <h1 className="text-5xl font-semibold">
                        Sign Up
                    </h1>

                    <form >
                        <div className="form-control md:w-96">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="text" placeholder="Email" name='email' className="input input-bordered border-white rounded-full shadow text-white bg-transparent" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="Password" name='password' className="input input-bordered border-white rounded-full shadow text-white bg-transparent" />
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