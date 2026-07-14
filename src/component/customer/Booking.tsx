"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";
import HotelEdit from "./HotelEdit";
import HotelDelete from "./HotelDelete";

const BookingPage = ({ hotel }: any) => {
  return (
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

      <td className="px-6 py-4 font-semibold text-white">{hotel.title}</td>

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

          <HotelEdit hotel={hotel}></HotelEdit>

          <HotelDelete hotel={hotel}></HotelDelete>
        </div>
      </td>
    </tr>
  );
};

export default BookingPage;
