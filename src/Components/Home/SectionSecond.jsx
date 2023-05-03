import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

const SectionSecond = () => {
    const [data, setData] = useState([])
    const [show, setShow] = useState(true)

    // console.log(show)
    //     const handleShow = ()=>{
    //         setShow(true);
    //     }

  
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
                    data.map(m => <div className='bg-white rounded-2xl m-5 p-3 hover:bg-green-100' key={m.id}>

                        <img className='w-3/4 mx-auto h-[250px] rounded-xl' src={m.view_recipes_url} alt="" />

                        <div className='text-center'>
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <p><b>Name : </b> {m.recipe}</p>
                                    <p className='text-xl font-semibold'>{m.name}</p>
                                </div>

                                <div onClick={() => setShow(!show)} className='flex text-3xl' >
                                    {show ? <button><MdOutlineFavoriteBorder /></button> :
                                        <button><MdFavorite /></button>}
                                </div>
                            </div>
                            <p>{m.description}</p>
                            <div className='flex items-center justify-center'>
                                <p>Rating :  </p>
                                <div className='ml-1 mr-1 flex'>
                                    <BsStarFill className='text-yellow-400 ' />
                                    <BsStarFill className='text-yellow-400 ' />
                                    <BsStarFill className='text-yellow-400 ' />
                                    <BsStarFill className='text-yellow-400 ' />
                                </div>
                                <div>
                                    <p>4.5</p>
                                </div>
                            </div>
                            <Link to={`/${m.id}`} className='btn btn-warning'>Show Details</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SectionSecond;