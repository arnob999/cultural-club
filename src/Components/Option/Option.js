import React from 'react';

const Option = ({ option }) => {
    // console.log(option)
    return (
        <div className='col rounded-5 py-3 border border-info'>
            <p className='m-0'>{option}</p>
        </div>
    );
};

export default Option;