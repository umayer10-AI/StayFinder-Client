"use client";

import React, { useState, useEffect } from "react";
import { Pencil, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { hotelEdit } from "@/lib/api/action";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const hotelTypes = [
  "Hotel",
  "Resort",
  "Apartment",
  "Villa",
  "Guest House",
  "Hostel",
];

const AdminHotelEdit = ({ hotel }: any) => {
  const [open, setOpen] = useState(false);
//   console.log(hotel)

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (hotel) {
      reset({
        title: hotel.title,
        type: hotel.type,
        description: hotel.description,
        location: hotel.location,
        contact: hotel.contact,
        price: hotel.price,
      });
    }
  }, [hotel, reset]);

  const onSubmit = async (data: any) => {

    const token = await authClient.token()
    const t = token?.data?.token

    const updateData = {
      id: hotel._id,
      ...data,
    };

    // console.log("Updated Data:", updateData);
    const finalData = await hotelEdit(updateData, hotel._id, t)

    if(finalData.modifiedCount > 0){
        toast.success('Update Data',
            {
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            }
        );
        redirect('/dashboard/admin/hotels')
    }

    setOpen(false);
  };

  return (
    <>
      {/* Edit Button */}

      <button
        onClick={() => setOpen(true)}
        className="rounded-lg cursor-pointer bg-blue-600 p-2 text-white transition hover:bg-blue-700"
      >
        <Pencil size={18} />
      </button>

      {/* Modal */}

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5">
          <div className="w-full max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-800 p-6">
              <h1 className="text-2xl font-bold text-white">Edit Hotel</h1>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-slate-800 p-2 text-white"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-h-[80vh] overflow-y-auto p-8"
            >
              {/* Title & Type */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    Hotel Title
                  </label>

                  <input
                    {...register("title")}
                    className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-white">
                    Hotel Type
                  </label>

                  <select
                    {...register("type")}
                    className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
                  >
                    {hotelTypes.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-white">
                  Description
                </label>

                <textarea
                  {...register("description")}
                  rows={3}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white"
                />
              </div>

              {/* Location Contact */}

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <input
                  {...register("location")}
                  placeholder="Location"
                  className="h-12 rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
                />

                <input
                  {...register("contact")}
                  placeholder="Contact"
                  className="h-12 rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
                />
              </div>

              {/* Price */}

              <div className="mt-5">
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Price"
                  className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 text-white"
                />
              </div>

              {/* Buttons */}

              <div className="mt-6 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-slate-700 px-6 py-2 text-white"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl cursor-pointer bg-emerald-600 px-6 py-2 font-semibold text-white"
                >
                  Update Hotel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHotelEdit;
