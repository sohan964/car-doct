"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../../../public/assets/images/login/login.svg'

const page = () => {

    const handleSignUp =async(e)=>{
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };

        const res = await fetch("http://localhost:3000/signup/api",{
            method:"POST",
            body: JSON.stringify(newUser),
            headers:{
                "content-type" : "application/json"
            }
        })
        console.log(res);
        if(res.status === 200){
            e.target.reset();
        }
    };

    return (
        <div className="hero w-full my-20">
            <div className=" hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <Image className='w-3/4' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">SignUp</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            {/* <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label> */}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="SignUp" />

                        </div>
                    </form>
                    <p className='text-center'>Already a CarDoc user <Link href={"/login"} className='font-bold text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default page;