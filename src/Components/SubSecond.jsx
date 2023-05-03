import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { BsStarFill } from "react-icons/bs";
import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md";

const SubSecond = ({ m }) => {
    const [show, setShow] = useState(true)
    const notify = () => toast('Favorite addeed');

    console.log(show)
    const handleShow = () => {
        setShow((prev) => !prev);
        notify();

    }
    return (
        <div>
            <div className='bg-white rounded-2xl m-5 p-3 hover:bg-green-100' key={m.id}>

                <img className='w-3/4 mx-auto h-[250px] rounded-xl' src={m.view_recipes_url} alt="" />

                <div className='text-center'>
                    <div className='flex justify-between mt-3'>
                        <div>
                            <p><b>Name : </b> {m.recipe}</p>
                            <p className='text-xl font-semibold'>{m.name}</p>
                        </div>

                        {show && <div onClick={handleShow} className='flex text-3xl' >
                            <button 
                            ><MdOutlineFavoriteBorder />
                            </button>

                        </div>}
                        <ToastContainer/>

                        {!show && <div className='flex text-3xl' >
                            <button className=' cursor-not-allowed'><MdFavorite /></button>

                        </div>}

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
                    <Link to={`/chef/${m.id}`} className='btn btn-warning'>Show Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SubSecond;