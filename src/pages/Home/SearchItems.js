import React from 'react';
import logo from '../../images/logo.webp';

const SearchItems = ({ searchData }) => {
    console.log('data',searchData);
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    searchData?.flightName?.map((name, index) => <div className="card card-side bg-base-100  justify-center items-center shadow-xl">
                        <div className='card-body'>
                            <div className='flex items-center'>
                                <div className="avatar">
                                    <div className="w-8 rounded">
                                        <img src={logo} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div>
                                <h2 className="text-xl font-semibold">{name}</h2>
                            </div>
                        </div>
                        <div className="card-body">
                            <h2 className="text-xl font-semibold">₹{searchData.flightPrice[index]}</h2>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default SearchItems;