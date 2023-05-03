import React from 'react';

const BlogOne = () => {
    return (
        <div>
            <h2 className='text-2xl'>

Here are five different types of cooking recipe blog posts you can try your cooking time: </h2>

<div className='bg-blue-200 p-5 m-2 rounded-xl'>
    <h1 className='text-2xl'><b>1. Classic Recipe:</b> Choose a classic dish that people love, and create a blog post detailing the steps to cook it. You can include your personal tips and tricks, variations to the recipe, and a list of ingredients with measurements.</h1>
    <h2>Example: How to Make Classic Spaghetti Carbonara</h2>
</div>



<div className='bg-red-200 p-5 m-2'>
    <h2 className='text-2xl'><b>2. Quick & Easy Recipe:</b> Everyone loves a quick and easy meal that can be made in under 30 minutes. Create a blog post featuring a recipe that fits this criteria, including step-by-step instructions and simple ingredients that are easy to find.</h2>
    <h2>Example: 15-Minute Garlic Shrimp Pasta Recipe</h2>
</div>



<div className='bg-green-200 p-5 m-2'>
    <h2 className='text-2xl'><b>3. Healthy Recipe:</b> With the increasing emphasis on healthy eating, a lot of people are looking for recipes that are both delicious and nutritious. Choose a recipe that's healthy and easy to make, and create a blog post featuring the recipe, nutrition information, and any substitutions or modifications you suggest.</h2>
    <h2>Example: Healthy Turkey and Vegetable Stir-Fry</h2>
</div>



<div className='bg-yellow-200 p-5 m-2'>
    <h3 className='text-2xl'><b>4. Seasonal Recipe:</b> Seasonal recipes are always popular, as they take advantage of fresh produce and ingredients that are in season. Choose a seasonal ingredient and create a blog post featuring a recipe that showcases it.</h3>
    <h2>Example: Summer Grilled Peach Salad with Goat Cheese and Honey</h2>
</div>



<div className='bg-pink-200 p-5 m-2'>
    <h2 className='text-2xl'><b>5. International Recipe: </b> Many people love to explore international cuisines and try new dishes from around the world. Choose a dish from a country or region that you love, and create a blog post featuring the recipe, the history behind the dish, and any cultural significance.</h2>
    <h2>Example: How to Make Authentic Indian Chicken Curry</h2>
</div>


        </div>
    );
};

export default BlogOne;