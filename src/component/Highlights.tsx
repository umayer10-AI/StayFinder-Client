import {
  FaHotel,
  FaMapMarkerAlt,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaHotel className="text-4xl text-orange-500" />,
    value: "15K+",
    title: "Hotels & Resorts",
    description: "Choose from thousands of verified hotels, resorts, and apartments worldwide.",
  },
  {
    icon: <FaMapMarkerAlt className="text-4xl text-orange-500" />,
    value: "120+",
    title: "Destinations",
    description: "Explore top travel destinations across countries and popular cities.",
  },
  {
    icon: <FaUsers className="text-4xl text-orange-500" />,
    value: "50K+",
    title: "Happy Travelers",
    description: "Thousands of travelers trust StayFinder for safe and comfortable bookings.",
  },
  {
    icon: <FaStar className="text-4xl text-orange-500" />,
    value: "4.9",
    title: "Average Rating",
    description: "Highly rated by our customers for excellent service and user experience.",
  },
];

export default function Highlights() {
  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Trusted by <span className="text-orange-500">Thousands</span> of Travelers
          </h2>

          <p className="mt-4 text-slate-400">
            We make finding and booking your perfect stay simple, secure,
            and enjoyable with premium service and verified accommodations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-orange-500"
            >
              <div className="mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold text-white">
                {item.value}
              </h3>

              <h4 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}