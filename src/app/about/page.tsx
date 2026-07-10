"use client";

import { Award, Users, Hotel, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          About <span className="text-orange-500">StayFinder</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-400">
          StayFinder is your ultimate travel companion. We help you discover the finest hotels, 
          resorts, and apartments worldwide, ensuring a seamless and comfortable stay 
          wherever you go.
        </p>
      </section>

      {/* Stats/Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {[
          { icon: Hotel, title: "100K+ Properties", desc: "A vast collection of verified stays worldwide." },
          { icon: Users, title: "50K+ Happy Guests", desc: "Trusted by travelers across the globe." },
          { icon: Award, title: "10+ Awards", desc: "Recognized as a leading travel platform." },
          { icon: ShieldCheck, title: "Secure Booking", desc: "Safe, encrypted, and hassle-free payments." }
        ].map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center hover:border-orange-500 transition-all">
            <item.icon className="w-10 h-10 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Our Mission */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-slate-400 mb-4 leading-relaxed">
              At StayFinder, our mission is to make travel accessible, easy, and delightful. 
              We believe every journey should be an unforgettable experience. That is why 
              we curate stays that perfectly match your budget and personal preferences.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We continuously innovate our technology and services to ensure your booking 
              journey is seamless. Our dedicated customer support team is always ready 
              to assist you 24/7.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" 
              alt="Our Mission" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose StayFinder?</h2>
        <div className="space-y-6 text-slate-400 max-w-3xl mx-auto">
          <p>✅ <strong>Transparency:</strong> Every listing is verified, ensuring you get exactly what you see.</p>
          <p>✅ <strong>Best Price Guarantee:</strong> We work hard to provide the most competitive rates in the market.</p>
          <p>✅ <strong>User-Centric Design:</strong> Our platform is built for speed, simplicity, and ease of use.</p>
          <p>✅ <strong>24/7 Support:</strong> We are always just a click away to assist you with your travel needs.</p>
        </div>
      </section>
    </div>
  );
}