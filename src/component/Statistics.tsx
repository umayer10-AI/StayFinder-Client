import {
  FaHotel,
  FaUsers,
  FaGlobeAsia,
  FaStar,
} from "react-icons/fa";

export default function Statistics() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            Our Success
          </span>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Trusted by Travelers
            <span className="text-orange-500"> Around the World</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            StayFinder helps thousands of travelers discover verified hotels,
            apartments, and resorts with secure booking, trusted reviews, and
            the best prices.
          </p>

          <button className="mt-8 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Explore Hotels
          </button>
        </div>

        {/* Right Stats */}
        <div className="grid grid-cols-2 gap-5">
          <div className="rounded-3xl bg-slate-950 p-8">
            <FaHotel className="mb-5 text-4xl text-orange-500" />
            <h3 className="text-5xl font-bold text-white">15K+</h3>
            <p className="mt-2 text-slate-400">Hotels Listed</p>
          </div>

          <div className="rounded-3xl bg-orange-500 p-8">
            <FaUsers className="mb-5 text-4xl text-white" />
            <h3 className="text-5xl font-bold text-white">250K+</h3>
            <p className="mt-2 text-orange-100">Happy Guests</p>
          </div>

          <div className="rounded-3xl bg-orange-500 p-8">
            <FaGlobeAsia className="mb-5 text-4xl text-white" />
            <h3 className="text-5xl font-bold text-white">120+</h3>
            <p className="mt-2 text-orange-100">Destinations</p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8">
            <FaStar className="mb-5 text-4xl text-orange-500" />
            <h3 className="text-5xl font-bold text-white">4.9★</h3>
            <p className="mt-2 text-slate-400">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}