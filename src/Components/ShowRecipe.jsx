import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";

const ShowRecipe = () => {
    const dat = useLoaderData();
    console.log(dat)
    return (
        <div className='p-8 bg-red-200 text-center'>
            <h3 className='text-4xl font-semibold'>Show recipe</h3>
            <br />
            <hr className=' border-blue-700 border-4 border-dashed' />
            <div className=' mx-auto'>
                <p className='text-2xl font-semibold text-center'>{dat.recipe}</p>
                <p className='text-xl font-semibold text-center'>{dat.name}</p>
                <img className='w-2/4 rounded-xl mx-auto' src={dat.view_recipes_url} alt="" />
                <p className='text-xl'>Title :  {dat.description}</p>
                <h2><b> <span className='text-xl text-orange-600'>Recipe </span>:  {dat.chef.how_to_cook} </b></h2>
                <div className='flex p-3  items-center justify-center'>
                    <p className='text-xl font-bold'>Like :</p>
                    <AiFillLike className='text-3xl mr-1 ml-1' />
                    <p>  {dat.chef.likes}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowRecipe;<h3>SHoe recipe</h3>