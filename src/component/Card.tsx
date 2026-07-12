import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  DollarSign,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function Card({ hotel }: { hotel: any }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/20">
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Type Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-orange-600 to-orange-400 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {hotel.type}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold text-white">
            {hotel.title}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-400">
            {hotel.description}
          </p>
        </div>

        {/* Hotel Info */}
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3 text-zinc-300">
            <MapPin className="h-5 w-5 text-orange-500" />
            <span className="line-clamp-1">{hotel.location}</span>
          </div>

          <div className="flex items-center gap-3 text-zinc-300">
            <Phone className="h-5 w-5 text-orange-500" />
            <span>{hotel.contact}</span>
          </div>

          <div className="flex items-center gap-3">
            <DollarSign className="h-5 w-5 text-orange-500" />

            <span className="text-lg font-bold text-orange-400">
              ${hotel.price}
            </span>

            <span className="text-sm text-zinc-500">/ night</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-zinc-800 pt-5">
          <div className="flex items-center gap-2 rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300">
            <Building2 className="h-4 w-4 text-orange-500" />
            {hotel.type}
          </div>

          <Link
            href={`/hotel/${hotel._id}`}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 via-orange-600 to-orange-400 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}