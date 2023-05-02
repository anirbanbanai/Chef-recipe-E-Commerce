import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ShowRecipe = () => {
    const dat = useLoaderData();
    console.log(dat)
    return (
        <div>
            <h3>SHoe recipe</h3>
            <div className='p-8 mx-auto'>
                <p className='text-2xl font-semibold text-center'>{dat.recipe}</p>
                <p className='text-xl font-semibold text-center'>{dat.name}</p>
                <img className='w-3/4 rounded-xl mx-auto' src={dat.view_recipes_url} alt="" />
            </div>
        </div>
    );
};

export default ShowRecipe;<h3>SHoe recipe</h3>