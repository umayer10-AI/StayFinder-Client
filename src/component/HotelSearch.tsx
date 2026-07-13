"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function HotelSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const [search, setSearch] = useState(
    params.get("search") || ""
  );

  const [category, setCategory] = useState(
    params.get("category") || ""
  );

  const handleSearch = () => {
    const query = new URLSearchParams();

    if (search) {
      query.set("search", search);
    }

    if (category) {
      query.set("category", category);
    }

    router.push(`?${query.toString()}`);
  };

  return (
    <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-3 shadow-lg">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search hotel by name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-white outline-none focus:border-orange-500"
          />
        </div>

        <div className="lg:w-60">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none focus:border-orange-500"
          >
            <option value="">All Categories</option>
            <option value="Hotel">Hotel</option>
            <option value="Resort">Resort</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Guest House">Guest House</option>
            <option value="Hostel">Hostel</option>
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 via-orange-600 to-orange-400 px-6 py-2 font-semibold text-white"
        >
          <Search size={18} />
          Search
        </button>
      </div>
    </div>
  );
}