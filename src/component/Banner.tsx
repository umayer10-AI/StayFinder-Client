import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaStar,
  FaBed,
  FaHotel,
} from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* Blur Effects */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-400/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-[80%] items-center gap-16 px-6 py-20 lg:grid-cols-2">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-orange-400">
            <FaHotel />
            <span>Trusted by 50,000+ Travelers</span>
          </div>

          <h1 className="mt-8 text-3xl font-extrabold leading-tight text-white lg:text-5xl 2xl:text-6xl">
            Discover Your
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Perfect Stay
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-xl leading-8 text-slate-300">
            Explore luxury hotels, cozy apartments and premium resorts
            across the world. Compare prices, read reviews and book
            confidently with StayFinder.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/rooms"
              className="group flex items-center gap-2 rounded-xl bg-orange-600 px-4 py-3 font-semibold text-white transition hover:scale-105 hover:bg-orange-500"
            >
              Browse Hotels

              <ArrowRight className="transition group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 font-semibold text-white transition hover:border-orange-500 hover:bg-slate-800"
            >
              Learn More
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
              <h2 className="text-3xl font-bold text-orange-400">
                50K+
              </h2>
              <p className="mt-1 text-slate-400">
                Hotels
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
              <h2 className="text-3xl font-bold text-orange-400">
                20K+
              </h2>
              <p className="mt-1 text-slate-400">
                Guests
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
              <h2 className="text-3xl font-bold text-orange-400">
                100+
              </h2>
              <p className="mt-1 text-slate-400">
                Cities
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur">
              <h2 className="text-3xl font-bold text-orange-400">
                4.9★
              </h2>
              <p className="mt-1 text-slate-400">
                Ratings
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative flex justify-center">
                      {/* Orange Glow */}
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>

          {/* Main Image */}
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900"
            alt="Luxury Hotel"
            width={600}
            height={700}
            priority
            className="relative z-10 rounded-3xl border border-slate-700 object-cover shadow-[0_20px_60px_rgba(249,115,22,0.25)]"
          />

          {/* Rating Card */}
          <div className="absolute left-0 top-10 z-20 rounded-2xl border border-slate-700 bg-slate-900/90 p-4 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-500 p-3">
                <FaStar className="text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">4.9 Rating</h3>
                <p className="text-sm text-slate-400">
                  Based on 12K+ Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div className="absolute -right-5 top-1/2 z-20 rounded-2xl border border-slate-700 bg-slate-900/90 p-4 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-500 p-3">
                <FaMapMarkerAlt className="text-white" />
              </div>

              <div>
                <h3 className="font-bold text-white">100+ Cities</h3>
                <p className="text-sm text-slate-400">
                  Worldwide Hotels
                </p>
              </div>
            </div>
          </div>

          {/* Rooms Card */}
          <div className="absolute bottom-5 left-8 z-20 rounded-2xl border border-slate-700 bg-slate-900/90 p-4 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-orange-500 p-3">
                <FaBed className="text-white" />
              </div>

              <div>
                <h3 className="font-bold text-white">50,000+</h3>
                <p className="text-sm text-slate-400">
                  Premium Rooms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}