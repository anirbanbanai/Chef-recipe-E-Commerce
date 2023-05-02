import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Sectionfirst = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='mt-5 w-[90%] mx-auto'>
            <h2 className='text-4xl font-semibold '>Meet the <span className='text-green-500'>Chef</span></h2>
            <br />
            <hr className=' border-4 border-dashed' />
            <div>
                {
                    // data.map(m => console.log(m))
                }
            </div>
        </div>
    );
};

export default Sectionfirst;