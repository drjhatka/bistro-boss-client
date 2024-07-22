import React from 'react';
import Slider from './Slider';
import SectionTitle from '../Shared/SectionTitle';

const Home = () => {
    return (
        <div className=''>

            <div>
                <Slider />
            </div>
            <div>
                <SectionTitle heading={'ORDER ONLINE'} subheading={'---From 10am to 11.00pm---'} />
            </div>
        </div>
    );
};

export default Home;