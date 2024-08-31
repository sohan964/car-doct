"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "../../../public/assets/images/login/login.svg";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
// import {signIn} from 'next-auth/react';
const Page = () => {
  const router = useRouter();
  const session = useSession();
  const searchParams =  useSearchParams();
  const path = searchParams.get('redirect');
  if (session.data) router.push("/");
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path? path : '/'
    });
    console.log(resp);

    if (resp.status === 200) router.push("/");
  };

  return (
    <div className="hero w-full my-20">
      <div className=" hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <Image className="w-3/4" src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <div className="flex justify-center space-x-2">
            <button className="btn btn-primary btn-outline">
              <FaGoogle />
            </button>
            <button className="btn btn-primary btn-outline">
              <FaGithub />
            </button>
          </div>
          <p className="text-center mt-2">
            New to CarDoc{" "}
            <Link
              href={"/signup"}
              className="font-bold text-orange-600"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
