import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//import './slider-override.css'
import { useContext } from "react";
import { DataContext } from "../Providers/DataProvider";
import './BannerSlider.css'
const BannerSlider = () => {
    const { data, isLoading } = useContext(DataContext)
   
    const onChange = () => { }
    const onClickItem = () => { }
    const onClickThumb = () => { }



    return (
        <Carousel            
            showArrows={true}
            autoPlay={true}
            interval={1500}
            infiniteLoop={true}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
        >
            {
                !isLoading &&  data.slice(0, 6).map((menu, index) => {
                    return <div key={'Slider-' + index}>
                        <img className="text-center" src={menu.image} alt="" />
                    </div>

                })
            }
        </Carousel>
    );
};

export default BannerSlider;