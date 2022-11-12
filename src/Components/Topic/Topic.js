import React from 'react';
import './Topic.css'
const Topic = ({ topic }) => {
    const { name, logo, total } = topic
    console.log(topic)
    return (
        <div className='col rounded-2 p-3 topic-container'>
            <h4>
                {name}
            </h4>
            <img className='mt-3' src={logo} alt="" />
            <p className='mt-3'><small>Total Number Of Quiz: {total}</small></p>
        </div>
    );
};

export default Topic;