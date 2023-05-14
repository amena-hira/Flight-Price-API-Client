import React, { useContext, useState } from 'react';
import background from '../../images/background.webp';
import SearchItems from './SearchItems';
import { AuthContext } from '../../context/AuthProvider';

const Banner = () => {
    const [source, setSource] = useState();
    const [destination, setDestination] = useState();
    const { user } = useContext(AuthContext);
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        const from = event.target;
        const date = from.date.value;
        fetch(`http://localhost:5000/flights?source=${source}&destination=${destination}&date=${date}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex-col">
                <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 bg-base-100 md:grid-cols-3 lg:grid-cols-4 lg:justify-items-center gap-4 px-5 lg:pl-4 lg:pr-0 py-5">
                    <div className="form-control w-full max-w-xs">
                        <select className="select select-bordered" name='source' onChange={(e) => setSource(e.target.value)} required>
                            <option disabled selected>Select Source</option>
                            <option value='Delhi' disabled={destination === 'Delhi'}>Delhi</option>
                            <option value='Jaipur' disabled={destination === 'Jaipur'}>Jaipur</option>
                            <option value='Mumbai' disabled={destination === 'Mumbai'}>Mumbai</option>
                            <option value='Goa' disabled={destination === 'Goa'}>Goa</option>
                            <option value='Kolkata' disabled={destination === 'Kolkata'}>Kolkata</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <select className="select select-bordered" name='destination' onChange={(e) => setDestination(e.target.value)} required>
                            <option disabled selected>Select Destination</option>
                            <option value='Delhi' disabled={source === 'Delhi'}>Delhi</option>
                            <option value='Jaipur' disabled={source === 'Jaipur'}>Jaipur</option>
                            <option value='Mumbai' disabled={source === 'Mumbai'}>Mumbai</option>
                            <option value='Goa' disabled={source === 'Goa'}>Goa</option>
                            <option value='Kolkata' disabled={source === 'Kolkata'}>Kolkata</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <input name='date' type="text" placeholder='Date' onFocus={(e) => (e.target.type = "date")} className="input input-bordered text-zinc-800" />
                    </div>
                    <div className="form-control w-32">
                        <button className="btn bg-cyan-800 border-none">Search Now</button>
                    </div>
                </form>
                {
                    user ?
                        <SearchItems></SearchItems>
                        :
                        ''
                }
            </div>

        </div>
    );
};

export default Banner;