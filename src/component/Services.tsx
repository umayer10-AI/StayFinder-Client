import {
  FaHotel,
  FaShieldAlt,
  FaHeadset,
  FaCreditCard,
  FaMapMarkedAlt,
  FaStar,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHotel className="text-3xl text-orange-500" />,
    title: "Wide Range of Hotels",
    description:
      "Choose from luxury hotels, budget stays, apartments, resorts, and villas across the world.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    title: "Secure Booking",
    description:
      "Book your stay with confidence using our safe, secure, and trusted booking system.",
  },
  {
    icon: <FaCreditCard className="text-3xl text-orange-500" />,
    title: "Easy Payments",
    description:
      "Enjoy fast and hassle-free payments with multiple secure payment options.",
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-orange-500" />,
    title: "Best Locations",
    description:
      "Discover hotels in top tourist destinations and prime city locations worldwide.",
  },
  {
    icon: <FaHeadset className="text-3xl text-orange-500" />,
    title: "24/7 Customer Support",
    description:
      "Our support team is always available to help you with bookings and travel needs.",
  },
  {
    icon: <FaStar className="text-3xl text-orange-500" />,
    title: "Top Rated Stays",
    description:
      "Stay at highly-rated hotels recommended by thousands of satisfied travelers.",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Everything You Need for a
            <span className="text-orange-500"> Perfect Stay</span>
          </h2>

          <p className="mt-4 text-slate-400">
            We provide premium services to make your hotel booking experience
            simple, secure, and unforgettable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                <div className="group-hover:text-white">
                  {service.icon}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="leading-7 text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}