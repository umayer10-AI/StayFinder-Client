import Link from "next/link";
import { MapPin } from "lucide-react";

const destinations = [
  { name: "Bali, Indonesia", properties: "2,450+ Stays", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600" },
  { name: "Paris, France", properties: "1,820+ Stays", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600" },
  { name: "Dubai, UAE", properties: "3,100+ Stays", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600" },
  { name: "London, UK", properties: "1,200+ Stays", image: "https://images.unsplash.com/photo-1513635269975-59663e0a1ad2?w=600" },
];

export default function Destinations() {
  return (
    <section className="bg-slate-950 py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">Explore Destinations</h2>
            <p className="text-slate-400">Discover popular locations around the world.</p>
          </div>
          <Link href="/rooms" className="text-orange-400 font-semibold hover:text-orange-300 flex items-center gap-1">
            View All Destinations →
          </Link>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl overflow-hidden cursor-pointer border border-slate-800 hover:border-orange-500/50 transition-all duration-500"
            >
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  {dest.name}
                </h3>
                <p className="text-slate-300 text-sm">{dest.properties}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}