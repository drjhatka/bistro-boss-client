import React from 'react';

const CustomTitle = ( {text, subtext, transparent}) => {
    
        return (
            <div className={transparent ?` bg-fixed my-4 w-full  px-20 text-center  text-red text-white bg-gradient-to-l from-slate-500 to-slate-600 bg-transparent  opacity-90  font-semibold mx-auto`:`w-full opacity-80 my-4 bg-black  py-6 px-20 text-center font-semibold mx-auto border-4  rounded-md`}>
                <h1 className='text-4xl h-56 flex flex-col  items-center justify-center text-red brightness-200 py-4'>
                    {text}
                    <p className='text-justify text-sm flex justify-center'>
                    {subtext}
                </p>
                </h1>
               
            </div>
        );
    
};

export default CustomTitle;