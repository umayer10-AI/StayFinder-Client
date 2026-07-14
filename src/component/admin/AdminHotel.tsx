"use client";

import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import AdminHotelEdit from "./AdminHotelEdit";
import AdminHotelDelete from "./AdminHotelDelete";

const AdminHotel = ({ hotel }: any) => {
  return (
    <tr className="border-b border-slate-800 transition hover:bg-slate-800/40">
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
          {/* Details */}
          <Link
            href={`/browse/${hotel._id}`}
            className="rounded-lg border border-sky-500 p-2 text-sky-400 transition hover:bg-sky-500/10"
          >
            <Eye size={18} />
          </Link>

          {/* Edit */}
          <AdminHotelEdit hotel={hotel} />

          {/* Delete */}
          <AdminHotelDelete hotel={hotel} />
        </div>
      </td>
    </tr>
  );
};

export default AdminHotel;