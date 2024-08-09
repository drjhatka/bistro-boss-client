import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import menuImg1 from '../../assets/menu/dessert-bg.jpeg'
import menuImg2 from '../../assets/menu/pizza-bg.jpg'
import menuImg3 from '../../assets/menu/salad-bg.jpg'
import menuImg4 from '../../assets/menu/soup-bg.jpg'
const CategorySlider = () => {
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
            swipeable={false}
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
            <div><img className='w-70' src={menuImg1} alt="" /></div>
            <div><img className='w-70' src={menuImg2} alt="" /></div>
            <div><img className='w-70' src={menuImg3} alt="" /></div>
            <div><img className='w-70' src={menuImg4} alt="" /></div>
        </Carousel>
    )

};

export default CategorySlider;