import React from 'react';
import Title from '../Titles/Title';
import CustomTitle from '../Titles/CustomTitle';

const Card = ({text, subtext, transparent, image}) => {
    //console.log(image)
    return (
        <div>
            <div className={"flex mt-4 items-center bg-[url('"+`${image}`+"')] bg-cover min-h-96"}>
                <CustomTitle  text={text} subtext={subtext} transparent={transparent}></CustomTitle>

            </div>
        </div>
    );
};

export default Card;