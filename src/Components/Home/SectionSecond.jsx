import React, { useEffect, useState } from 'react';


import SubSecond from '../SubSecond';

const SectionSecond = () => {
    const [data, setData] = useState([])
  

    useEffect(() => {
        fetch(`https://assign10-server-anirbanbanai.vercel.app/chef`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className='mt-5 min-h-screen  bg-opacity-60' >
            <h2 className='text-4xl font-bold'>Popular Recipe</h2>
            <hr className='border-2 border-black mt-3 mb-3' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3' style={{ backgroundImage: `url("https://www.slowfood.com/wp-content/uploads/2016/10/world-food-day.jpg")` }}>
                {
                    data.map(m => <SubSecond key={m.id} m={m}></SubSecond>)
                }
            </div>
        </div>
    );
};

export default SectionSecond;