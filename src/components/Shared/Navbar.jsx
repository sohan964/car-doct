"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assets/logo.svg";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {


  //get user 
  const session = useSession();
  console.log(session);


  const navItems = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "About",
      path: "/about",
    },

    {
      title: "Services",
      path: "/services",
    },

    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "MyBookings",
      path: "/my-bookings",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  const navShow = (
    <>
      {navItems.map((item) => (
        <li key={item.path}>
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </>
  );

  return (
    <div className=" bg-opacity-20 bg-black ">
      <div className="navbar  container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navShow}
            </ul>
          </div>
          <Link href={"/"}>
            <Image alt="car doct" src={logo} height={40} width={70} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navShow}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
            <FaShoppingCart className="text-xl" />
            <FaSearch className="text-xl" />
            <Link href={"/"} className="btn btn-outline btn-primary">
              Appointment
            </Link>
            { !session.data ? <Link href={"/login"} className="btn  btn-primary">
              Login
            </Link> : <button onClick={()=> signOut()} className="btn  btn-primary">Logout</button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
