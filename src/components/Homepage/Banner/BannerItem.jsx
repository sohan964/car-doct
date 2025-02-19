import React from 'react';
import './BannerItem.css';
import Image from 'next/image';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <Image src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='lg:text-6xl text-xl font-bold text-white'>
                        Affordable <br />
                        Price for Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2 w-2/5">
                    <p className='text-white lg:text-xl text-lg sm:text-sm'>There are many variations of passages of available, but the majority have suffered Alteration In same form </p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-2/5">
                    <button className="btn btn-primary mr-5">Warning</button>
                    <button className="btn btn-outline  btn-primary">Warning</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;