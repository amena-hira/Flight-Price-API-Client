import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import background from '../../images/background.webp';
import { FcGoogle,FcHome } from "react-icons/fc";
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result);
                navigate('/');
                toast.success('Logged in successfully!!!')
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                console.log(result);
                navigate('/');
                toast.success('Logged in successfully!!!')
            })
            .catch(error => {
                console.log(error);
                toast('Please first create an account to see the full menu!! Thank you.', {
                    icon: '👏',
                });
                event.preventDefault();
            })

    }
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
                        Login
                    </h1>
                    <div className="divider">OR</div>
                    <div className="avatar placeholder" onClick={handleGoogleLogin}>
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                            <span className="text-4xl"><FcGoogle></FcGoogle></span>
                        </div>
                    </div>
                    <form onSubmit={handleLogin}>
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
                                Login
                            </button>
                        </div>
                    </form>

                    <p className='pt-5'>Don't have an account? <Link to='/signup' className='btn-link text-info hover:text-slate-900'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;