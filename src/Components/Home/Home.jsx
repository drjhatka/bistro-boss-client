import React from 'react';
import Slider from '../Sliders/BannerSlider';
import SectionTitle from '../Shared/SectionTitle';
import CategorySlider from '../Sliders/CategorySlider';
import Title from '../Titles/Title';
import MenuCard from '../Shared/MenuCard';
import SectionButton from '../Shared/SectionButton';
import StandAloneBanner from '../Shared/StandAloneBanner';
import ItemCard from '../Shared/ItemCard';
import BannerSlider from '../Sliders/BannerSlider';

const Home = () => {
    const menuData = {}


    return (
        <div className=' w-[90%] mx-auto'>

            <div>
                <BannerSlider></BannerSlider>
            </div>

            <div>
                <SectionTitle heading={'ORDER ONLINE'} subheading={'---From 10am to 11.00pm---'} />
            </div>
            <div className='min-h-56'>
                <CategorySlider></CategorySlider>
            </div>
            <div className='bg-emerald-500'>
                <Title text={'Bistro Boss'} subtext={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, veritatis aut? Perferendis dolores culpa nobis asperiores omnis, neque delectus iusto facere quisquam, ullam mollitia eaque vel sit officiis quasi provident?'} transparent={true}></Title>
            
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-4 py-4'>
                <MenuCard title={'Salad and best dishes!'} price={90} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, est. Numquam odit, nemo repellat commodi velit necessitatibus veniam consequuntur, consequatur officiis doloribus alias nam sit unde, explicabo laborum iste beatae!'}></MenuCard>
                <MenuCard title={'Salad and best dishes!'} price={90} details={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, est. Numquam odit, nemo repellat commodi velit necessitatibus veniam consequuntur, consequatur officiis doloribus alias nam sit unde, explicabo laborum iste beatae!'}></MenuCard>
            </div>
            <div className='text-center py-4'>
            <SectionButton text={'View Full Menu'.toUpperCase()}></SectionButton>

            </div>
            <div>
                <StandAloneBanner></StandAloneBanner>
            </div>
            <div>
                <SectionTitle subheading={'Should Try'} heading={'CHEF RECCOMENDS'} ></SectionTitle>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                <ItemCard  ></ItemCard>
                <ItemCard  ></ItemCard>
                <ItemCard  ></ItemCard>
                <ItemCard  ></ItemCard>
            </div>
        </div>
    );
};

export default Home;