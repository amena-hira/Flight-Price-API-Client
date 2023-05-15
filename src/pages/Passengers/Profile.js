import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import profile from '../../images/profile.jpg';
import background from '../../images/background.webp';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="hero " style={{ backgroundImage: `url(${background})`, height: '70vh' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div className='card bg-base-100'>
                            <div class="card-body">
                                <div class="form-control">
                                    <label class="label">
                                        <div className="avatar">
                                            <div className="w-20 rounded-full">
                                                <img src={profile} alt='' />
                                            </div>
                                        </div>
                                    </label>
                                    <input type="email" defaultValue={user?.email} placeholder="email" class="input input-bordered text-black" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;