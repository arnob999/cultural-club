import React from 'react';
import './Option.css'
const Option = ({ option, printkoro }) => {
    // console.log(option)
    return (
        <div onClick={() => printkoro(`${option}`)} className='option col rounded-5 py-3 border border-info'>
            <p className='m-0'>{option}</p>
        </div>
    );
};
//  onClick={() => printkoro(`${option}`)}
export default Option;