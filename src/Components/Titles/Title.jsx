import React from 'react';

const Title = ({text, subtext,transparent}) => {
    return (
        <div className={transparent ?`lg:w-[65%] my-4 py-6 px-20 text-center opacity-70 text-white font-semibold mx-auto border-2`:`lg:w-[65%] my-4  py-6 px-20 text-center font-semibold mx-auto border-2`}>
            <h1 className='text-4xl text-red py-4'>
                {text}
            </h1>
            <p className='text-justify'>
                {subtext}
            </p>
        </div>
    );
};

export default Title;