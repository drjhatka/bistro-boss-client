import React from 'react';

const SectionButton = ({text, clickHandler}) => {
    return (
        <button className='px-4 py-2 hover:bg-black rounded-md font-semibold hover:text-white border-b-2 border-b-black ' onClick={clickHandler}>
            {text}
        </button>
    );
};

export default SectionButton;