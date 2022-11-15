import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const TopicDetails = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data.name)
    const quizesHolder = quizes.data.questions
    return (
        <div>
            <h2 className='mt-5 mb-5'>Quiz of {quizes.data.name}</h2>
            {quizesHolder.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)}

        </div>
    );
};

export default TopicDetails;