import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import LazyLoad from 'react-lazyload';


const Sectionfirst = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://assign10-server-anirbanbanai.vercel.app/chef`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data)
    return (
        <div className='mt-5 mb-4 w-[90%] mx-auto' >
            <h2 className='text-4xl font-semibold '>Meet the <span className='text-green-500'>Chef</span></h2>
            <br />
            <hr className=' border-4 border-dashed' />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {
                    data.map(m => <div className=' bg-green-300 rounded-xl p-3 m-3 hover:-rotate-1 hover:opacity-80' key={m.name}>
                        <p>{m.id}</p>
                        <p className='text-xl font-semibold'>{m.chef.name}</p>
                        <p className='text-xl '>From : <b>{m.name}</b></p>
                        <LazyLoad height={300}>
                            <img className='w-[350px] h-[200px] mx-auto rounded-xl' src={m.chef.picture} alt="" />
                        </LazyLoad>
                        <p>Experience : <b>{m.chef.experience} year.</b>  </p>
                        <h1>Recipe Item : {m.chef.recipes}</h1>
                        <Link to={`/chef/${m.id}`} className='btn btn-warning'>Show Recipe <BsArrowRight className='text-xl font-bold ml-1' /></Link>
                    </div>)
                }
            </div>
            <br />
            <hr className=' border-4 border-dashed' />
        </div>
    );
};

export default Sectionfirst;