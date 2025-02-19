import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const ServiceCart = ({ service }) => {
    const { _id,img, price, title } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><Image height={120} width={430} src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link href={`/services/${_id}`}>
                        <button className="btn btn-primary">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;