import React, { useContext } from 'react';
import Slider from '../Sliders/BannerSlider';
import SectionTitle from '../Shared/SectionTitle';
import CategorySlider from '../Sliders/CategorySlider';
import Title from '../Titles/Title';
import MenuCard from '../Shared/MenuCard';
import SectionButton from '../Shared/SectionButton';
import StandAloneBanner from '../Shared/StandAloneBanner';
import ItemCard from '../Shared/ItemCard';
import BannerSlider from '../Sliders/BannerSlider';
import { DataContext } from '../Providers/DataProvider';
import Featured from './Featured';
import Testimonials from './Testimonials';
import { useNavigate } from 'react-router-dom';
import CustomTitle from '../Titles/CustomTitle';

const Home = () => {
    const { data, isLoading } = useContext(DataContext)
    const navigate = useNavigate()

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
            <div className="flex mt-4 items-center bg-[url('chef-service.jpg')] bg-cover min-h-96">
                <Title className='text-black' text={'Bistro Boss'} subtext={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, veritatis aut? 
                    Perferendis dolores culpa nobis asperiores omnis, neque delectus iusto facere quisquam, ullam mollitia eaque vel sit officiis quasi provident?`} transparent={false}></Title>

            </div>
            <div>
                <SectionTitle heading={'FROM OUR MENU'} subheading={'---check it out---'} />
            </div>
            <div className='grid lg:grid-cols-2 lg:gap-4 py-4'>
                {
                    !isLoading && data.slice(0, 6).map((menu, index) => {
                        return <MenuCard key={'MenuCard-' + index} image={menu.image} title={menu.name} price={menu.price} details={menu.recipe}></MenuCard>
                    })
                }

            </div>
            <div className='text-center py-4'>
                <SectionButton clickHandler={() => { navigate('/our-menu') }} text={'View Full Menu'.toUpperCase()}></SectionButton>

            </div>
            <div>
                <StandAloneBanner></StandAloneBanner>
            </div>
            <div>
                <SectionTitle subheading={'Should Try'} heading={'CHEF RECCOMENDS'} ></SectionTitle>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
                {
                    !isLoading && data.slice(0, 6).map((menu, index) => {
                        return <ItemCard menu={menu} key={'ItemCard-' + index} ></ItemCard>
                    })
                }
            </div>
            <div className='py-4'>
                <Featured></Featured>
            </div>
            <div>
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;