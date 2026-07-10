import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

const blogs = [
  {
    title: "10 Tips for Booking the Perfect Hotel",
    date: "July 10, 2026",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  },
  {
    title: "Top 15 Beach Resorts to Visit This Summer",
    date: "July 5, 2026",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    title: "Luxury vs Budget Hotels: Which One is Right?",
    date: "June 28, 2026",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
  },
];

export default function Blogs() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
              Latest Articles
            </span>

            <h2 className="mt-5 text-4xl font-bold text-white">
              Travel <span className="text-orange-500">Guides & Blogs</span>
            </h2>
          </div>

          <Link
            href="/blogs"
            className="hidden text-orange-400 hover:text-orange-300 md:block"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-slate-950"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-2 text-sm text-orange-400">
                  <FaCalendarAlt />
                  {blog.date}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-white transition group-hover:text-orange-500">
                  {blog.title}
                </h3>

                <Link
                  href="/blogs"
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-orange-400"
                >
                  Read More
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}