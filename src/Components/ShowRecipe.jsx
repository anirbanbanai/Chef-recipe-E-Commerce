import React from 'react';
import { VscFilePdf } from "react-icons/vsc";
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillLike } from "react-icons/ai";
import Pdf from "react-to-pdf";
export const reff = React.createRef();

const ShowRecipe = () => {
    const dat = useLoaderData();
    // console.log(dat)
    return (
        <div ref={reff} className='border-4 mx-auto border-red-500 m-5 p-8 rounded-xl bg-slate-200 text-center'>
            <h3 className='text-4xl font-semibold'>Show recipe</h3>
            <br />
            <hr className=' border-blue-700 border-4 border-dashed' />
            <div className=' mx-auto'>
                <p className='text-2xl font-semibold text-center'>{dat.recipe}</p>
                <p className='text-xl font-semibold text-center'>{dat.name}</p>
                <img className='md:w-2/4  rounded-xl mx-auto' src={dat.view_recipes_url} alt="" />
                <p className='text-xl'>Title :  {dat.description}</p>
                <h2><b> <span className='text-xl text-orange-600'>Recipe </span>:  {dat.chef.how_to_cook} </b></h2>
                <div className='flex p-3  items-center justify-center'>
                    <p className='text-xl font-bold'>Like :</p>
                    <AiFillLike className='text-blue-700 text-3xl mr-1 ml-1' />
                    <p>  {dat.chef.likes}</p>
                    <Link to={'/blog1'}>  <button className='btn bg-red-600 ml-3'>See Recipe Blog</button></Link>
                </div>

            </div>

            <div className='ml-3'>
                <Pdf targetRef={reff} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='btn bg-warning text-black hover:text-white'>Download <VscFilePdf className='text-xl ml-2' /></button>}
                </Pdf>
            </div>
        </div>
    );
};

export default ShowRecipe; <h3>SHoe recipe</h3>