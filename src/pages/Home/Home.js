import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../Assets/image/1.jpg'
import img2 from '../../Assets/image/2.jpg'
import img3 from '../../Assets/image/3.jpg'
import img4 from '../../Assets/image/4.jpg'
import Limited from '../Limited/Limited';
import "./Home.css"

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className="carousel w-full custom-carro ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/3 px-20 ">
                        <h1 className='text-2xl ml-5 font-bold text-white'>
                        Historical guide. A historical guide leads tourists <br />
                        around historical landmarks and points <br /> of interest like ruins, temples, battlefields and other sites of historical importance. .
                    </h1>
                    <Link to={"/services"}><button className="btn btn-accent  ml-5 mt-5">Book Now</button></Link>
                </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/3 px-20">
                        <h1 className='text-2xl ml-5 font-bold text-white'>
                        Mordern guide. A Mordern guide leads tourists <br />
                        around Mordern landmarks and points <br /> of interest like ruins, temples, battlefields and other sites of Mordern importance. .
                    </h1>
                    <Link to={"/services"}><button className="btn btn-accent  ml-5 mt-5">Book Now</button></Link>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/3 px-20 ">
                        <h1 className='text-2xl ml-5 font-bold text-white'>
                        Adventure guide. A Adventure guide leads tourists <br />
                        around Adventure guide landmarks and points <br /> of interest like ruins, temples, battlefields and other sites of Adventure guide importance. .
                    </h1>
                    <Link to={"/services"}><button className="btn btn-accent  ml-5 mt-5">Book Now</button></Link>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" alt=''/>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    <div className="absolute top-1/3 px-20 ">
                        <h1 className='text-3xl font-bold text-white'>
                        Nature guide. A Nature guide leads tourists <br />
                        around Nature guide landmarks and points <br /> of interest like ruins, temples, battlefields and other sites of Nature guide importance. .
                    </h1>
                    <Link to={"/services"}><button className="btn btn-accent  ml-5 mt-5">Book Now</button></Link>
                    </div>
                </div>
            </div>
            <Limited></Limited>
        </div>
    );
};

export default Home;