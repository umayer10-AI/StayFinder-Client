"use client";

import { useState } from "react";
import { Trash2, X, AlertCircle } from "lucide-react";
import { hotelDeleteBtn } from "@/lib/api/action";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function HotelDelete({hotel}: any) {
  const [open, setOpen] = useState(false);
//   console.log(hotel)

  const handleDelete = async () => {

    const token = await authClient.token()
    const t = token?.data?.token

    const data = await hotelDeleteBtn(hotel._id, t)
    if(data.deletedCount > 0){
        alert('Hotel Deleted')
        redirect('/dashboard/customer/my-hotel')
    }
    setOpen(false);
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg cursor-pointer bg-red-600 p-2 text-white transition hover:bg-red-700"
      >
        <Trash2 size={18} />
      </button>


      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

          <div className="relative w-[400px] rounded-xl bg-[#18181b] p-6 shadow-xl">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>


            {/* Icon */}
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
              <AlertCircle className="text-red-500" size={28} />
            </div>


            {/* Text */}
            <h2 className="text-xl font-semibold text-white">
              Delete getuserHotelsData permanently?
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              This will permanently delete{" "}
              <span className="font-semibold text-blue-400">
                My Awesome Hotel
              </span>{" "}
              and all of its data. This action cannot be undone.
            </p>


            {/* Buttons */}
            <div className="mt-6 flex justify-end gap-3">

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg bg-gray-700 px-5 py-2 text-sm font-medium text-white hover:bg-gray-600"
              >
                Cancel
              </button>


              <button
                onClick={handleDelete}
                className="rounded-lg cursor-pointer bg-red-600 px-5 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Delete Project
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}