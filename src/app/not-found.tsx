import Link from "next/link";
import { FaHotel, FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="max-w-xl text-center">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg shadow-orange-500/30">
          <FaHotel className="text-4xl text-white" />
        </div>

        {/* 404 */}
        <h1 className="mt-8 text-7xl font-extrabold text-white md:text-8xl">
          4<span className="text-orange-500">0</span>4
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-bold text-white">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-400">
          The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            href="/hotels"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition duration-300 hover:border-orange-500 hover:bg-slate-800"
          >
            <FaSearch />
            Explore Hotels
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-sm text-slate-500">
          © {new Date().getFullYear()} StayFinder. All rights reserved.
        </p>
      </div>
    </section>
  );
}