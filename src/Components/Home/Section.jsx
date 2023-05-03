import React from 'react';

const Section = () => {
    return (
       <div className='m-4'>
        <div className='p-5'>
            <h2 className='text-5xl font-bold text-center'>Food <span className='text-blue-500'>Gallary</span></h2>
        </div>
         <div className="carousel  w-[80%] md:h-[500px] mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/160929101749-essential-spanish-dish-paella-phaidon.jpg?q=w_1900,h_1069,x_0,y_0,c_fill/w_1280" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://www.worldtravelconnector.com/wp-content/uploads/2019/11/Famous-foods-around-the-world_green-papaya-salad.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://www.worldtravelconnector.com/wp-content/uploads/2019/11/Famous-foods-around-the-world_Mexican-burrito.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://static.toiimg.com/thumb/62120743.cms?width=1200&height=900" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Section;