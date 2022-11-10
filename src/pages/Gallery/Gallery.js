import React, { useState } from 'react';
import './Gallery.css'
import img1 from "../../Assets/image/g1.jpeg"
import img2 from "../../Assets/image/g2.jpeg"
import img3 from "../../Assets/image/g3.jpeg"
import img4 from "../../Assets/image/g4.jpeg"
import img5 from "../../Assets/image/g5.jpg"
import img6 from "../../Assets/image/g6.jpg"
import img7 from "../../Assets/image/g7.jpg"
import img8 from "../../Assets/image/g8.jpg"
import {  AiOutlineClose } from 'react-icons/ai';

const Gallery = () => {

    const data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
    ]

    const [model, setModel] = useState(false)
    const [tempimgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc)
        setModel(true);
    }
    return (
        <div className='my-12'>
            <h1 className='text-5xl italic font-bold text-center  mb-5'>This is gallery</h1>

            <div className={model? "model open" : "model"}>
            <img src={tempimgSrc} alt="" />
            <AiOutlineClose onClick={() => setModel(false)}/>

            </div>

            <div className='gallery'>
                {
                    data.map((item, index)=>{
                        return(
                            <div className='pics' key={index} onClick={() =>getImg(item.imgSrc)}>
                                <img src={item.imgSrc} style={{width: '100%'}} alt="" />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Gallery;