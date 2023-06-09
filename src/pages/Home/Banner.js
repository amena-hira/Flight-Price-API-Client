import React, { useContext, useState } from 'react';
import background from '../../images/background.webp';
import SearchItems from './SearchItems';
import { AuthContext } from '../../context/AuthProvider';
import BannerSearch from './BannerSearch';
import { FcDeleteDatabase } from "react-icons/fc";

const Banner = () => {
    const [searchData, setSearchData] = useState();
    const { user } = useContext(AuthContext);
    const [nodata, setNoData] = useState(false);
    console.log(nodata);
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex-col">
                <div className='px-5 lg:pl-4 lg:pr-0 py-5 bg-base-100'>
                    <BannerSearch user={user} setSearchData={setSearchData} setNoData={setNoData}></BannerSearch>
                    <div className='mt-3 px-2'>
                        <p className='text-xs text-red-900'>*Flight available from 14 May to 31 May 2023</p>
                    </div>
                </div>


                {
                    user && searchData ?
                        <SearchItems searchData={searchData}></SearchItems>
                        :
                        ''
                }
                {
                    nodata && <p className='bg-base-100 p-5 text-red-900 flex items-center gap-2'><FcDeleteDatabase></FcDeleteDatabase> Have No Flight On This Date!</p>
                }

            </div>
        </div>
    );
};

export default Banner;