import React, { useState } from 'react';
import background from '../../images/background.webp';
import { toast } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";

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
        console.log("price: ", typeof value);
        if (flightPrice.length >= 0 && flightPrice.length < 3) {
            if (value !== '') {
                setFlightPrice(flightPrice => [...flightPrice, value])
            }
        } else {
            toast.error('You can not add more than 3 prices.')
        }
    }
    const handleFlightValueReset = (value) => {
        setFlightName(flightName.filter(item => item !== value))

    }
    const handlePriceValueReset = (value) => {
        setFlightPrice(flightPrice.filter(item => item !== value))
    }
    console.log(flightName, flightPrice);

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
                        toast.success(`${date}->${source}->${destination}'s Flight Added Successfully!`)
                    }
                    else {
                        toast("Already added flight on this date. Thank You!!", {
                            icon: '👏',
                        })
                    }

                })
        }
        else {
            toast.error('Please add same quantity airlines and prices.')
        }
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex-col">
                <div className='bg-base-100 px-5 lg:px-4 py-5'>
                    <form onSubmit={handleFLightSubmit} className="grid grid-cols-1 md:grid-cols-3 lg:justify-items-center gap-4">
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
                                    flightName?.map((name, index) => <div key={index} className="badge badge-accent badge-outline">{name} <button onClick={() => handleFlightValueReset(name)}><RxCross2></RxCross2></button></div>)
                                }
                            </div>
                        </div>
                        <div className="form-control">
                            <input type="number" name='flightPrice' placeholder="Flight Price" className="input input-bordered text-zinc-800" onBlur={(e) => handleFlightPrice(e.target.value)} required />
                            <div className='flex flex-wrap pt-2 gap-1'>
                                {
                                    flightPrice?.map((price, index) => <div key={index} className="badge badge-accent badge-outline">${price} <button onClick={() => handlePriceValueReset(price)}><RxCross2></RxCross2></button></div>)
                                }
                            </div>
                        </div>
                        {
                            source && destination ?
                                <div className="form-control w-32">
                                    <button className="btn bg-cyan-800 border-none hover:bg-cyan-950">Submit</button>
                                </div>
                                :
                                <div className='form-control w-32'>
                                    <button className="px-3 py-3 text-white bg-sky-300 rounded focus:outline-none" disabled>Search Now</button>
                                </div>
                        }

                    </form>
                    <div>
                        <p className='text-end text-xs text-red-900'>*To save price one by one<br />then click outside the price box.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AddFlight;