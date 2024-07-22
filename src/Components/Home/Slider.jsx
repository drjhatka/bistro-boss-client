import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import './slider-override.css'
const Slider = ({images}) => {
    const onChange =()=>{}
    const onClickItem =()=>{}
    const onClickThumb =()=>{}
    return (
        <div className="">
            <Carousel 
                showArrows={true} 
                onChange={onChange} 
                onClickItem={onClickItem} 
                onClickThumb={onClickThumb}
                
                >
                <div  >
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4}/>
                    <p className="legend">Legend 4</p>
                </div>
                
            </Carousel>
        </div>
    );
};

export default Slider;