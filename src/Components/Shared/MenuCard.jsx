import React from 'react';

const MenuCard = ({ image, title, price, details }) => {
    return (
        <div className='flex gap-2 border-2 rounded-md items-center px-4'>
            <div className=' h-full py-2' >
                
                <img src={image} className='h-full w-32  rounded-r-[50%] rounded-b-[50%] '></img>
            </div>
            <div className='flex flex-col py-2 '>
                <div className='flex'>
                    <h1 className='text-2xl flex'>
                        {title}.................
                    </h1>
                    <h2 className='text-yellow-700'>${price}</h2>


                </div >
                <div className='py-4 text-end '>
                    <p className='text-justify mt-3'>
                        {details.slice(0, 100)}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default MenuCard;