import React from 'react';

const SectionTitle = ({ heading, subheading, textColor }) => {
    return (
        <div className='flex flex-col items-center py-3  justify-center'>

            <div className='w-64 text-center '>
                <h2 className='text-yellow-400 border-b-2 py-2'>
                    ----{subheading}----
                </h2>
            </div>
            <div className='w-56 text-center uppercase'>
                <h1 className={textColor? textColor+' font-semibold text-2xl py-2 border-b-2':'font-semibold text-2xl py-2 border-b-2'}>
                    {heading}
                </h1>
            </div>

        </div>
    );
};

export default SectionTitle;