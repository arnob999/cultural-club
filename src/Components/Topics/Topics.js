import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'
const Topics = () => {
    const topics = useLoaderData()

    return (
        <div>
            <div className='d-flex align-self-center justify-content-center'>
                <div>
                    <img className='headerPic' src={require('./kosu.png')} alt="" />
                </div>
                <div className='d-flex align-self-center justify-content-center ms-5'>
                    <h3 className='headerQuote'>
                        To know what you know and what you do not know, that is true knowledge....
                    </h3>
                </div>
            </div>
            <div className='mx-auto  row row-cols-4 w-75 alltopics'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
            </div>
        </div>

    );
};

export default Topics;