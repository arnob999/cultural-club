import React from 'react';
import './Topic.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Topic = ({ topic }) => {
    const { id, name, logo, total } = topic

    return (
        <div className='col rounded-2 p-3 topic-container'>
            <h4>
                {name}
            </h4>
            <img className='mt-3' src={logo} alt="" />
            <p className='mt-3'><small>Total Number Of Quiz: {total}</small></p>
            <Button variant="info" className='px-3'><Link className='text-decoration-none text-white' to={`/quiz/${id}`}>Go To Quiz</Link> </Button>
        </div>
    );
};

export default Topic;