import React from 'react';
import './gallery.css';
import  Img1  from './img/2.jpg';
import  Img2  from './img/3.jpg';
import  Img3  from './img/4.jpg';
import  Img4  from './img/5.jpg';
import  Img5  from './img/6.jpg';
import  Img6  from './img/7.jpg';
import  Img7  from './img/8.jpg';
import  Img8  from './img/9.jpg';


const Gallery = () => {
    let data =[
        {
            id: 1,
            imgSrc: Img1,
        },
        {
            id: 2,
            imgSrc:  Img2,
        },
        {
            id: 3,
            imgSrc: Img3,
        },
        {
            id: 4,
            imgSrc: Img4,
        },
        {
            id: 5,
            imgSrc:  Img5,
        },
        {
            id: 6,
            imgSrc: Img6,
        },
        {
            id: 7,
            imgSrc: Img7,
        },
        {
            id: 8,
            imgSrc: Img8,
        },
    ]

    return ( 
        <div className="gallery mx-16">
            {data.map((item, index)=>{
                return(
                    <div className="pics" key={index}>
                        <img src={item.imgSrc} alt="" className='w-full'/>
                    </div>
                )
            })}

        </div>
     );
}
 
export default Gallery;