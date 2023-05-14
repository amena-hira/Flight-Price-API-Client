import React from 'react';

const SearchItems = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                <div className="card card-side bg-base-100  justify-center items-center shadow-xl">
                    <div className='card-body'>
                        <h2 className="card-title">AIr Indigo</h2>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">$150</h2>
                    </div>
                </div>
                <div className="card card-side bg-base-100  justify-center items-center shadow-xl">
                    <div className='card-body'>
                        <h2 className="card-title">AIr Indigo</h2>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">$150</h2>
                    </div>
                </div>
                <div className="card card-side bg-base-100  justify-center items-center shadow-xl">
                    <div className='card-body'>
                        <h2 className="card-title">AIr Indigo</h2>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">$150</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchItems;