import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../images/profile.jpg';

const Navbar = () => {
    const menu = <>
        <li><Link to='/'>Home</Link></li>
    </>
    return (
        <div>
            <div className='shadow-xl bg-sky-100'>
                <div className='max-w-7xl mx-auto'>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    {menu}
                                </ul>
                            </div>
                            <Link className="btn btn-ghost normal-case text-xl">Flight API</Link>
                        </div>
                        <div className="navbar-end">
                            <ul className="menu menu-horizontal px-1 hidden md:flex">
                                {menu}
                            </ul>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={profile} alt='Profile' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link>Logout</Link></li>
                                </ul>
                            </div>
                            <ul className="menu menu-horizontal px-1 hidden md:flex">
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;