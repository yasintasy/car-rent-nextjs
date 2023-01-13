import React from 'react';
import Props from './props';


const Card = (props: Props) => {
    return (
        <div className='p-6 pb-[18px] bg-white rounded-lg drop-shadow-card'>
            {props.children}
        </div>
    );
};

export default Card;