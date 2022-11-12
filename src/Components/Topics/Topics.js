import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const topics = useLoaderData()

    return (
        <div className='mx-auto  row row-cols-4 w-75 alltopics'>
            {
                topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;