import { FaHotel } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="flex flex-col items-center">

        {/* Animated Logo */}
        <div className="relative flex h-24 w-24 items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-ping rounded-full border-2 border-orange-500/40"></div>

          {/* Rotating Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-slate-700 border-t-orange-500"></div>

          {/* Logo */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg shadow-orange-500/40">
            <FaHotel className="text-3xl text-white" />
          </div>
        </div>

        {/* Brand */}
        <h1 className="mt-8 text-4xl font-bold tracking-wide text-white">
          Stay<span className="text-orange-500">Finder</span>
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Finding your perfect stay...
        </p>

        {/* Loading Dots */}
        <div className="mt-8 flex items-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-orange-500"></div>

          <div
            className="h-3 w-3 animate-bounce rounded-full bg-orange-400"
            style={{ animationDelay: "0.2s" }}
          ></div>

          <div
            className="h-3 w-3 animate-bounce rounded-full bg-orange-300"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 h-2 w-72 overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-full origin-left animate-pulse rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400"></div>
        </div>
      </div>
    </div>
  );
}