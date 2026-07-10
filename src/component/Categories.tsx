import {
  FaHotel,
  FaUmbrellaBeach,
  FaMountain,
  FaCity,
  FaHome,
  FaTree,
} from "react-icons/fa";

const categories = [
  {
    title: "Hotels",
    properties: "1,200+ Stays",
    icon: <FaHotel className="text-3xl" />,
  },
  {
    title: "Resorts",
    properties: "450+ Resorts",
    icon: <FaUmbrellaBeach className="text-3xl" />,
  },
  {
    title: "Cabins",
    properties: "320+ Cabins",
    icon: <FaMountain className="text-3xl" />,
  },
  {
    title: "Apartments",
    properties: "980+ Apartments",
    icon: <FaCity className="text-3xl" />,
  },
  {
    title: "Villas",
    properties: "600+ Villas",
    icon: <FaHome className="text-3xl" />,
  },
  {
    title: "Countryside",
    properties: "270+ Stays",
    icon: <FaTree className="text-3xl" />,
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
            Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white">
            Explore by <span className="text-orange-500">Category</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Discover the perfect place to stay based on your travel style,
            destination, and comfort preferences.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:bg-slate-800"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                {category.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {category.properties}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}