import React from 'react';
import background from '../../images/background.webp';
import SearchItems from './SearchItems';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex-col">
                <from className="grid grid-cols-1 bg-base-100 md:grid-cols-3 lg:grid-cols-4 lg:justify-items-center gap-4 px-5 lg:pl-4 lg:pr-0 py-5">
                    <div className="form-control">
                        <input type="text" placeholder="Where From-Source" className="input input-bordered text-zinc-800" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder="Where To-Destination" className="input input-bordered text-zinc-800" />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='Date' onFocus={(e) => (e.target.type = "date")} className="input input-bordered text-zinc-800" />
                    </div>
                    <div className="form-control w-32">
                        <button className="btn bg-cyan-800 border-none">Search Now</button>
                    </div>
                </from>
                <SearchItems></SearchItems>
            </div>

        </div>
    );
};

export default Banner;