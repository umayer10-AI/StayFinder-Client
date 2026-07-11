"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

// const hotels = [
//   {
//     _id: 1,
//     title: "Sea Crown Resort",
//     type: "Resort",
//     price: 3500,
//     image:
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
//   },
//   {
//     _id: 2,
//     title: "Grand Palace",
//     type: "Hotel",
//     price: 2800,
//     image:
//       "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
//   },
//   {
//     _id: 3,
//     title: "Blue Ocean Villa",
//     type: "Villa",
//     price: 5200,
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600",
//   },
// ];

const BookingPage = (hotels) => {
  return (
    <div className="max-w-[90%] mx-auto bg-slate-950 py-5">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">

        {/* Header */}

        <div className="border-b border-slate-800 p-4">
          <h2 className="text-2xl font-bold text-white">
            Hotel List
          </h2>

          <p className="mt-1 text-slate-400">
            Manage all hotels
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Image
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Title
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Price
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  Actions
                </th>
              </tr>

            </thead>

            <tbody>

              {hotels.map((hotel) => (
                <tr
                  key={hotel._id}
                  className="border-b border-slate-800 transition hover:bg-slate-800/40"
                >
                  <td className="px-6 py-2">
                    <Image
                      src={hotel.image}
                      alt={hotel.title}
                      width={90}
                      height={60}
                      className="h-12 w-20 rounded-lg object-cover"
                    />
                  </td>

                  <td className="px-6 py-4 font-semibold text-white">
                    {hotel.title}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-400">
                      {hotel.type}
                    </span>
                  </td>

                  <td className="px-6 py-4 font-semibold text-emerald-400">
                    ${hotel.price}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">

                      <button
                        className="rounded-lg cursor-pointer bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="rounded-lg cursor-pointer bg-red-600 p-2 text-white transition hover:bg-red-700"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default BookingPage;