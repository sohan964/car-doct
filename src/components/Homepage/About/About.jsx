import React from 'react';
import person from '../../../../public/assets/images/about_us/person.jpg';
import parts from '../../../../public/assets/images/about_us/parts.jpg';
import Image from 'next/image';
const About = () => {
    return (
        <div className="hero my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2 '>
                <Image src={person} alt=''  className="w-4/5 h-full rounded-lg shadow-2xl" />
                <Image src={parts} alt='' className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className=' text-2xl font-bold text-orange-600'>About US</p>
                    <h1 className="my-5 text-5xl font-bold">We are qualified <br /> & of experience <br />in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;