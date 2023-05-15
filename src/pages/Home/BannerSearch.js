import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const BannerSearch = ({user, setSearchData, setNoData}) => {
    const [source, setSource] = useState();
    const [destination, setDestination] = useState();
    const [date, setDate] = useState();
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(source, destination, date);
        fetch(`https://flight-price-api-server.vercel.app/flights?source=${source}&destination=${destination}&date=${date}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status) {
                    console.log(data.status);
                    setSearchData(data.data);
                    setNoData(false);
                }
                else {
                    setSearchData();
                    setNoData(true);
                    toast.error('Have no flight on this date!!')
                }
            })
    }
    
    return (
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
                <input name='date' type="text" placeholder='Date' onFocus={(e) => (e.target.type = "date")} onChange={(e) => setDate(e.target.value)} className="input input-bordered text-zinc-800" required />
            </div>
            <div className="form-control w-32">
                {
                    user ?
                        source !== undefined && destination && date ?
                            <button className="btn bg-cyan-800 border-none hover:bg-sky-900">Search Now</button>
                            :
                            <button className="px-3 py-3 text-white bg-sky-300 rounded focus:outline-none" disabled>Search Now</button>
                        :
                        <Link to='/login' state={{ message: true }} className="px-3 py-3 text-white bg-sky-300 rounded focus:outline-none" >Search Now</Link>
                }
            </div>

        </form>
    );
};

export default BannerSearch;