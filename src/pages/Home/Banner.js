import React, { useContext, useState } from 'react';
import background from '../../images/background.webp';
import SearchItems from './SearchItems';
import { AuthContext } from '../../context/AuthProvider';
import BannerSearch from './BannerSearch';


const Banner = () => {
    const [searchData, setSearchData] = useState();
    const { user } = useContext(AuthContext);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center flex-col">

                <BannerSearch user={user} setSearchData={setSearchData}></BannerSearch>

                {
                    user && searchData ?
                        <SearchItems searchData={searchData}></SearchItems>
                        :
                        ''
                }

            </div>
        </div>
    );
};

export default Banner;