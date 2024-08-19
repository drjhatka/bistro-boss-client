import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import Rating from 'react-rating';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import styles bundle
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { useQuery } from '@tanstack/react-query';
import useAxios from '../Axios/useAxios';
import 'react-rating/'
import axios from 'axios';
import { FaQuoteRight } from "react-icons/fa";


const Testimonials = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const result = await axios.get('http://localhost:5000/reviews')
            console.log('re', result.data)
            return result.data
        }
    })


    return (
        <div>
            <div>
                <SectionTitle heading={'Testimonials'} subheading={'What our clients say'} ></SectionTitle>
            </div>
            <div className='md:w-[80%] mx-auto'>
                <SwiperComponent navigation={true} modules={[Navigation]} >
                    <div className=' flex flex-col justify-center'>
                        {
                            !isLoading && data.map((review) => {
                                return <SwiperSlide key={review._id}>
                                    <div className='flex flex-col justify-center text-3xl'>
                                        <FaQuoteRight></FaQuoteRight>
                                        <Rating 
                                            value={review.rating}
                                        ></Rating>

                                    </div>
                                    <div className='flex justify-center border-2 text-justify '>
                                        {review.details}
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </div>
                </SwiperComponent>
            </div>

        </div>
    );
};

export default Testimonials;