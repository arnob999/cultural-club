import React from 'react';
import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast, { Toaster } from 'react-hot-toast';
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Quiz = ({ quiz }) => {
    const notify = () => toast('Here is your toast.');
    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }
    const { question, options, id } = quiz
    // console.log(quiz.correctAnswer)
    return (
        <div className='px-4 py-2 border border-info rounded-4 my-5 shadow w-50 mx-auto'>
            <h4 className='d-flex justify-content-between mt-3'>{question}
                <h6 onClick={notify} className='me-3 mt-3'>

                    <FontAwesomeIcon className='text-white bg-secondary p-1 rounded-pill' icon={faEye} />


                </h6>
            </h4>

            <div className='row row-cols-2 mb-3 gy-3 mt-4'>
                {options.map(option => <Option key={generateKey(id)} option={option}></Option>)}
            </div>
        </div>
    );
};

export default Quiz;