import Option from '../Option/Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast';

const Quiz = ({ quiz }) => {
    const notify = (pro) => toast(`Correct Answer: ${pro}`);

    const check = (validity) => toast(`Your Answer is ${validity}`);

    const printkoro = (para) => {
        if (para === correctAnswer) {
            check('Correct')
        }

        else {
            check('Wrong')
        }

    }


    const generateKey = (pre) => {
        return `${pre}_${new Date().getTime()}`;
    }
    <Toaster />
    const { question, options, id, correctAnswer } = quiz
    // console.log(correctAnswer)
    return (
        <div className='px-4 py-2 border border-info rounded-4 my-5 shadow w-50 mx-auto'>
            <h4 className='d-flex justify-content-between mt-3'>{question}
                <h6 onClick={() => {
                    notify(correctAnswer)
                }} className='me-3 mt-3'>

                    <FontAwesomeIcon className='text-white bg-secondary p-1 rounded-pill' icon={faEye} />
                    <ToastContainer />
                </h6>
            </h4>

            <div className='row row-cols-2 mb-3 gy-3 mt-4'>
                {options.map(option => <Option key={generateKey(id)} printkoro={printkoro} option={option}></Option>)}
            </div>
        </div>
    );
};

export default Quiz;