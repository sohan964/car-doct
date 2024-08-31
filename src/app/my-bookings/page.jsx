"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import img from "../../../public/assets/images/about_us/parts.jpg";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { toast } from "react-toastify";
import axios from "axios";

const Page = () => {
  const session = useSession();
  const [bookings, setBookings] = useState([]);
  //console.log(session);

  const loadData = async () => {
    const res = await axios.get(
      `http://localhost:3000/my-bookings/api/${session?.data?.user?.email}`
    );
    console.log(res);
    //const data = await res.json();
    setBookings(res?.data?.myBookings);
  };

  useEffect(() => {
    if (session?.data?.user?.email) {
      loadData();
    }
  }, [session]);

  const handleDelete = async(id)=>{
    const deleted = await fetch(`http://localhost:3000/my-bookings/api/modify-booking/${id}`,{
        method: "DELETE",
    });
    const res = await deleted.json();

    if(res?.response?.deletedCount > 0){
      toast.success(res?.message)
        loadData();
    }

  }

  return (
    <div>
      <div className="relative  h-72">
        <Image
          className="absolute h-72 w-full left-0 top-0 object-cover"
          src={img}
          alt="service"
          width={1920}
          height={1080}
          style={{ width: "90vw" }}
        />
        <div className="absolute h-full left-0 top-0 flex items-center justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
          <h1 className="text-white text-3xl font-bold flex justify-center items-center ml-8">
            Details of {"My Bookings"}
          </h1>
        </div>
      </div>
      <div className="mt-12 w-11/12 mx-auto">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Service Name </th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                bookings?.map(({_id, serviceTitle, date, price}, i) =>(<tr 
                    key={_id}
                >
                    <th>{i+1}</th>
                    <td>{serviceTitle}</td>
                    <td>{price}</td>
                    <td>{date}</td>
                    <td className="space-x-1">
                      <Link href={`/my-bookings/update/${_id}`}>
                      <button className="btn btn-primary " >Edit</button>
                      </Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-outline btn-primary">Delate</button>
                    </td>
                  </tr>))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
