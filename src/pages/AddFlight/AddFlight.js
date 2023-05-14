import React, { useState } from 'react';
import background from '../../images/background.webp';
import { toast } from 'react-hot-toast';

const AddFlight = () => {
    const [flightName, setFlightName] = useState([]);
    const [flightPrice, setFlightPrice] = useState([]);
    const [source, setSource] = useState();
    const [destination, setDestination] = useState();

    const handleFlightNames = (value) => {
        if (flightName.length >= 0 && flightName.length < 3) {
            if (!flightName.includes(value)) {
                setFlightName(flightName => [...flightName, value])
            }
            else {
                toast.error('You can not add same airlines name again.')
            }
        } else {
            toast.error('You can not add more than 3 airlines')
        }
    }
    const handleFlightPrice = (value) => {
        if (flightPrice.length >= 0 && flightPrice.length < 3) {
            if (value !== '') {
                setFlightPrice(flightPrice => [...flightPrice, value])
            }
        } else {
            toast.error('You can not add more than 3 prices.')
        }
    }

    const handleFLightSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const destination = form.destination.value;
        const date = form.date.value;
        const flight = {
            date,
            source,
            destination,
            flightName,
            flightPrice
        }
        if (source !== undefined && destination !== 'Select Destination') {
            console.log(flight);
            if (flightName.length === flightPrice.length) {
                console.log(true);
                fetch('https://flight-price-api-server.vercel.app/flights', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(flight)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            setFlightName([]);
                            setFlightPrice([]);
                            toast.success("Flight Added Successfully!")
                        }
                        else {
                            toast("Already added flight on this date. Thank You!!", {
                                icon: '👏',
                            })
                        }

                    })
            }
            else {
                toast.error('Please Add Price For All Selected Airlines')
            }
        }
        else {
            toast('Select all information. Thank you!!', {
                icon: '👏',
            });
        }


    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex-col">
                <form onSubmit={handleFLightSubmit} className="grid grid-cols-1 bg-base-100 md:grid-cols-3 lg:justify-items-center gap-4 px-5 lg:px-4 py-5">
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
                        <input name='date' type="text" placeholder='Date' onFocus={(e) => (e.target.type = "date")} className="input input-bordered text-zinc-800" required />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <select className="select select-bordered" name='flightName' onChange={(e) => handleFlightNames(e.target.value)} required>
                            <option disabled selected>Select Airlines</option>
                            <option value='Air India'>Air India</option>
                            <option value='Air India Express'>Air India Express</option>
                            <option value='IndiGo'>IndiGo</option>
                            <option value='Vistara'>Vistara</option>
                            <option value='Akasa Air'>Akasa Air</option>
                            <option value='Air Asia'>Air Asia</option>
                        </select>
                        <div className='flex flex-wrap pt-2 gap-1'>
                            {
                                flightName?.map((name, index) => <div key={index} className="badge badge-accent badge-outline">{name}</div>)
                            }
                        </div>
                    </div>
                    <div className="form-control">
                        <input type="number" name='flightPrice' placeholder="Flight Price" className="input input-bordered text-zinc-800" onBlur={(e) => handleFlightPrice(e.target.value)} required />
                        <div className='flex flex-wrap pt-2 gap-1'>
                            {
                                flightPrice?.map((price, index) => <div key={index} className="badge badge-accent badge-outline">${price}</div>)
                            }
                        </div>
                    </div>
                    <div className="form-control w-32">
                        <button className="btn bg-cyan-800 border-none">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddFlight;