import Image from "next/image";
import {
  MapPin,
  Phone,
  DollarSign,
  Building2,
  Heart,
  Bookmark,
  CalendarDays,
} from "lucide-react";

export default function Details({ hotel }: { hotel: any }) {
  return (
    <section className="bg-zinc-950 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          {/* Left Side */}
          <div className="space-y-8">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-zinc-800">
              <div className="relative aspect-[16/10]">
                <Image
                  src={hotel.image}
                  alt={hotel.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Hotel Info */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <span className="rounded-full bg-gradient-to-r from-orange-600 via-orange-600 to-orange-400 px-4 py-1 text-sm font-semibold text-white">
                {hotel.type}
              </span>

              <h1 className="mt-4 text-3xl font-bold text-white">
                {hotel.title}
              </h1>

              <p className="mt-4 leading-8 text-zinc-400">
                {hotel.description}
              </p>
            </div>

            {/* About */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-semibold text-white">
                Why Choose This Hotel?
              </h2>

              <ul className="space-y-3 text-zinc-400">
                <li>✅ Comfortable & Spacious Rooms</li>
                <li>✅ Free WiFi</li>
                <li>✅ 24/7 Customer Support</li>
                <li>✅ Best Price Guarantee</li>
                <li>✅ Secure Online Payment</li>
                <li>✅ Family Friendly Environment</li>
              </ul>
            </div>
          </div>

          {/* Right Side */}
          <div className="h-fit space-y-6 lg:sticky lg:top-24">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center gap-3">
                <MapPin className="text-orange-500" />
                <span className="text-zinc-300">{hotel.location}</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Phone className="text-orange-500" />
                <span className="text-zinc-300">{hotel.contact}</span>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <Building2 className="text-orange-500" />
                <span className="text-zinc-300">{hotel.type}</span>
              </div>

              <div className="mt-8 border-t border-zinc-800 pt-6">
                <p className="text-sm text-zinc-500">Price</p>

                <div className="mt-2 flex items-end gap-2">
                  <DollarSign className="text-orange-500" />

                  <span className="text-4xl font-bold text-orange-400">
                    {hotel.price}
                  </span>

                  <span className="pb-1 text-zinc-500">/ night</span>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-8 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 text-white transition hover:border-red-500 hover:text-red-500">
                  <Heart size={18} />
                  Like (0)
                </button>

                <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 py-3 text-white transition hover:border-orange-500 hover:text-orange-400">
                  <Bookmark size={18} />
                  Save
                </button>
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 via-orange-600 to-orange-400 py-3 font-semibold text-white transition hover:scale-[1.02]">
                <CalendarDays size={20} />
                Book Now
              </button>
            </div>

            {/* Booking Info */}

            <div className="rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
              <h3 className="font-semibold text-white">Instant Booking</h3>

              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Reserve your stay now and receive your booking confirmation
                instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
