import React from 'react';

const Footer = () => {
    return (
        <div className='bg-slate-700 text-white'>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 pl-6 pr-6 rounded-xl p-5'>
            <div className='hover:bg-slate-600 p-3 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Food recipe</h2>
                <p className='text-sm mt-3'>Donec sollicitudin molestie malesuada. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. ...</p>
                <button className='btn btn-warning mt-3'>Read More About Us</button>
            </div>

            <div className='hover:bg-slate-600 p-3 rounded-xl'>
                <h2 className='text-3xl font-semibold'>Recent Recipe</h2>
                <div className='flex'>
                    <img className='w-2/4 rounded-xl m-2' src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium" alt="" />
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, voluptate!</p>
                </div>
                    <button className=' btn-warning py-1 px-3 rounded-xl'>Details</button>
            </div>

            <div className='hover:bg-slate-600 p-3 rounded-xl'>
                <h1>About us</h1>
                <label htmlFor="">email <input className='rounded-xl mt-4' type="email" name="" id="" /></label> <br />
                <label htmlFor="">name <input className='rounded-xl mt-2' type="text" name="" id="" /> </label>
                <br />
                <input className='bg-red-600  mt-3 px-3 py-1 rounded' type="submit" name="" id="" />
            </div>
           
        </div>
        <h2 className='text-center text-xl font-semibold'> Copyright © 2023, Food Recipes - A Premium HTML Template</h2>
        </div>
    );
};

export default Footer;