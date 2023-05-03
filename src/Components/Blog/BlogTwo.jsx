import React from 'react';

const BlogTwo = () => {
    return (
        <div className='w-[85%] mx-auto'>
            <div className='bg-blue-200 p-4 m-2'>
                <h1 className='text-2xl font-semibold'>Q1. Whats the different's between uncontrolled and controlled components?</h1>
                <h2 className='text-xl mt-5 p-3'><b>Ans : </b>Controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally </h2>
            </div>
            <div className='bg-red-200 p-4 m-2'>
                <h1 className='text-2xl font-semibold'>Q2. How to validate React props using PropTypes? </h1>
                <h2 className='text-xl mt-5 p-3'><b>Ans :</b> Easyly we can validate props. If the props type array/object/function, we can use second braket  for accepted props. If the props type data, we should use useparams,useLoader. Event we can use structure way. </h2>
            </div>
            <div className='bg-green-200 p-4 m-2'>
                <h2 className='text-2xl font-semibold'>Q3. What the different's between nodejs and express js?</h2>
                <h3 className='text-xl mt-5 p-3'><b>Ans :</b> Node. js is a run-time environment for building server-side event-driven i/o application using javascript. Express. js is a framework based on node. </h3>
            </div>
            <div className='bg-slate-200 p-4 m-2'>
                <h2 className='text-2xl font-semibold'>Q4. What is a custom hook, and why will you create a custom hook?</h2>
                <h3 className='text-xl mt-5 p-3'><b>Ans :</b>It's a JavaScript function whose name starts with ”use” and that may call other Hooks.  It can be reused easily, which makes the code cleaner and reduces the time to write the code.  We can create more modular and reusable code, which can improve readability and maintainability. </h3>
            </div>
        </div>
    );
};

export default BlogTwo;