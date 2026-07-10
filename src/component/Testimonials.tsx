import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "United States",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Booking with StayFinder was incredibly easy. The hotel matched the photos perfectly, and the customer support was excellent.",
  },
  {
    name: "James Wilson",
    country: "United Kingdom",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I've booked several trips through StayFinder. Great prices, verified hotels, and a smooth booking experience every time.",
  },
  {
    name: "Sophia Lee",
    country: "Singapore",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "The platform is beautiful and very easy to use. I found the perfect resort within minutes.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            What Our <span className="text-orange-500">Guests Say</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:-translate-y-2 hover:border-orange-500"
            >
              <FaQuoteLeft className="absolute right-8 top-8 text-5xl text-orange-500/20" />

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-16 w-16 rounded-full object-cover ring-2 ring-orange-500"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {item.country}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-1 text-orange-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}