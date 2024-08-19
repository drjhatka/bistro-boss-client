import { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DataContext } from '../Providers/DataProvider';

const CategorySlider = () => {
    const { data, isLoading } = useContext(DataContext)

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel 
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            arrows={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            
        >
            {
                !isLoading && data.slice(0,4).map((menu, index)=>{
                    return <div style={{position:'relative'}} key={'Category-'+index}>
                            <img  src={menu.image} alt="" /> 
                                <p className='absolute bottom-5 bg-black text-white font-bold lg:left-[50%] px-5 py-2 rounded'>
                                    {menu.category}
                                </p>
                            </div>

                })
            }
        </Carousel>
    )

};

export default CategorySlider;