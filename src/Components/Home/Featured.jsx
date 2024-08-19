import React from 'react';
import SectionTitle from '../Shared/SectionTitle';
import featuredImg from '../../assets/home/featured.jpg'
import './featured.css' 
import SectionButton from '../Shared/SectionButton';
const Featured = () => {
    return (
        <div className='featured bg-fixed bg-opacity-50 bg-slate-100  px-10 py-10 mt-4'>

            <SectionTitle textColor='text-white' heading={'Check it Out'} subheading={'From our menu'}></SectionTitle>
            <div className='md:flex  space-x-10 justify-center   items-center'>
                <img src={featuredImg} style={{width:'500px'}} alt="" />
                <div className='flex flex-col space-x-3 space-y-4  text-white'>
                    <h2 className='ml-3'>March 30, 2025</h2>
                    <h1 className='uppercase'>Where can I get Some?</h1>
                    <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Impedit laboriosam maxime eligendi, vitae ullam repellendus! Laboriosam, alias. 
                        Consequuntur laborum amet et perferendis. 
                        Nobis, tempora cupiditate qui quasi quis exercitationem, 
                        aut accusantium beatae non aliquam, ratione sapiente quae illo officiis sit.</p>
                <div className='w-32'>
                    <SectionButton   text={'Read More'}></SectionButton>
                </div>
                </div >
            </div>
        </div>
    );
};

export default Featured;