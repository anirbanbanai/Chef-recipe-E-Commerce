import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navi = useNavigate()
    const hamdlebACK = () => {
        navi(-1)
    }
    return (
        <div className='w-3/4 mx-auto'>
            <div>
                <img className='w-3/4 mx-auto' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
            </div>

            <div className='flex justify-center'>
                <button onClick={hamdlebACK} className='btn btn-primary flex justify-center'>Go Back</button>
            </div>

        </div>
    );
};

export default Error;