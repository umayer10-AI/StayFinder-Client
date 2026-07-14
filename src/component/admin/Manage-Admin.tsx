"use client";

import React from "react";
import { Eye, Trash2 } from "lucide-react";
import { bookingDeleteBtn } from "@/lib/api/action";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";


const ManageBooking = ({bookings}: any) => {
  const handleDelete = async (id: string) => {

    const token = await authClient.token()
    const t = token?.data?.token

    const data = await bookingDeleteBtn(id, t)
    if(data.deletedCount > 0){
        toast('Deleted',
            {
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            }
        );
        redirect('/dashboard/admin/bookings')
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      <div className="mx-auto max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg">
        <div className="border-b border-zinc-800 p-6">
          <h1 className="text-3xl font-bold text-white">Manage Bookings</h1>
          <p className="mt-1 text-zinc-400">
            Manage all your hotel bookings.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="px-4 py-4 text-left text-white">#</th>
                <th className="px-4 py-4 text-left text-white">Image</th>
                <th className="px-4 py-4 text-left text-white">Title</th>
                <th className="px-4 py-4 text-left text-white">Type</th>
                <th className="px-4 py-4 text-left text-white">Location</th>
                <th className="px-4 py-4 text-left text-white">Contact</th>
                <th className="px-4 py-4 text-left text-white">Price</th>
                <th className="px-4 py-4 text-center text-white">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking: any, index: number) => (
                <tr
                  key={booking._id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/50"
                >
                  <td className="px-4 py-3 text-zinc-300">
                    {index + 1}
                  </td>

                  <td className="px-4 py-3">
                    <img
                      src={booking.image}
                      alt={booking.hotelName}
                      className="h-16 w-20 rounded-lg object-cover"
                    />
                  </td>

                  <td className="px-4 py-3 font-medium text-white">
                    {booking.hotelName}
                  </td>

                  <td className="px-4 py-3 text-zinc-300">
                    {booking.type}
                  </td>

                  <td className="px-4 py-3 text-zinc-300">
                    {booking.location}
                  </td>

                  <td className="px-4 py-3 text-zinc-300">
                    {booking.contact}
                  </td>

                  <td className="px-4 py-3 font-semibold text-emerald-400">
                    ${booking.price}
                  </td>


                  {/* <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => handleDelete(booking._id)}
                      className="rounded-lg bg-red-600 cursor-pointer p-2 text-white transition hover:bg-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td> */}
                  <td className="px-4 py-3 text-center">
  <div className="flex items-center justify-center gap-2">
    {/* View Button */}
    <Link href={`/browse/${booking._id}`}>
      <button className="rounded-lg bg-emerald-600 p-2 text-white transition hover:bg-emerald-700 cursor-pointer">
        <Eye size={18} />
      </button>
    </Link>

    {/* Delete Button */}
    <button
      onClick={() => handleDelete(booking._id)}
      className="rounded-lg bg-red-600 p-2 text-white transition hover:bg-red-700 cursor-pointer"
    >
      <Trash2 size={18} />
    </button>
  </div>
</td>
                </tr>
              ))}

              {bookings.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="py-10 text-center text-zinc-400"
                  >
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBooking;