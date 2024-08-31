"use client"
import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';
// import {services} from '../../../lib/services'

const Services = () => {
   // console.log(services)

    const [services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:3000/services/api/get-all')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    
    console.log(services);

    return (
        <div className="mx-auto">
            <div className='text-center mb-4'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nemo?</p>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                
                 {
                    services?.map(service => <ServiceCart
                        key={service?._id}
                        service={service}
                    ></ServiceCart>)
                } 
            </div>
        </div>
    );
};

export default Services;