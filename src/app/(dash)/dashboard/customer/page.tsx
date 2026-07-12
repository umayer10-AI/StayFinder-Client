"use client";

import { authClient } from "@/lib/auth-client";
import {
  ArrowRight,
  Bookmark,
  Crown,
  Heart,
  Hotel,
  ShieldCheck,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";

export default function Page() {

  const { data: session } = authClient.useSession()
  const user = session?.user

  const isPro = user?.plan;

  const stats = [
    {
      title: "Wishlist",
      value: 12,
      desc: "Saved Hotels",
      icon: Heart,
    },
    {
      title: "Bookings",
      value: 8,
      desc: "Completed Bookings",
      icon: Bookmark,
    },
    {
      title: "Hotels",
      value: 5,
      desc: "Hotels Created",
      icon: Hotel,
    },
  ];

  return (
    <div className="min-h-screen max-w-[90%] mx-auto py-6 space-y-6">
      {/* Hero */}

      <section
        className={`rounded-3xl p-6 text-white transition-all duration-300 ${
          isPro === 'pro'
            ? "bg-gradient-to-r from-emerald-700 via-green-600 to-teal-500"
            : "border border-amber-600"
        }`}
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            {isPro === 'pro' ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                <Crown size={14} />
                PRO MEMBER
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                <Sparkles size={14} />
                Free Plan
              </span>
            )}

            <h1 className="mt-4 text-2xl md:text-3xl font-bold">
              {isPro === 'pro' ? "Welcome Back, Premium Member 👑" : "Welcome Back 👋"}
            </h1>

            <p className="mt-2 max-w-lg text-sm text-white/90">
              {isPro === 'pro'
                ? "Enjoy all premium benefits including priority booking, unlimited wishlist and exclusive hotel deals."
                : "Manage your bookings, wishlist and hotels from one place."}
            </p>
          </div>

          <form action="/api/subscription" method="POST">
            <button type="submit"
              className={`flex w-fit cursor-pointer items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                isPro === 'pro'
                  ? "bg-white text-emerald-700 hover:bg-zinc-100"
                  : "bg-linear-to-r from-violet-700 via-indigo-700 to-blue-700 hover:scale-105"
              }`}
            >
              <Crown size={18} />

              {isPro === 'pro' ? "Manage Plan" : "Get Pro Plan"}

              <ArrowRight size={16} />
            </button>
          </form>

        </div>
      </section>

      {/* Stats */}

      <div className="grid gap-5 md:grid-cols-3">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`rounded-2xl border bg-zinc-900 p-5 transition-all duration-300 ${
                isPro === 'pro'
                  ? "border-emerald-500/20 hover:border-emerald-400"
                  : "border-zinc-800 hover:border-orange-500/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`rounded-xl p-2.5 ${
                    isPro === 'pro' ? "bg-emerald-500/10" : "bg-orange-500/10"
                  }`}
                >
                  <Icon
                    size={22}
                    className={isPro === 'pro' ? "text-emerald-400" : "text-white"}
                  />
                </div>

                <span className="text-xs text-zinc-400">{item.title}</span>
              </div>

              <h2
                className={`mt-4 text-3xl font-bold ${
                  isPro === 'pro' ? "text-yellow-400" : "text-white"
                }`}
              >
                {item.value}
              </h2>

              <p className="mt-1 text-xs text-zinc-400">{item.desc}</p>
            </div>
          );
        })}
      </div>
      {/* Membership Section */}

      {isPro === 'pro' ? (
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-green-600 to-teal-500 p-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Crown size={14} />
                ACTIVE MEMBERSHIP
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white">
                StayFinder Pro Activated 🎉
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-white/90">
                Your Pro membership is active. Enjoy exclusive hotel discounts,
                unlimited wishlist, priority booking, premium support and many
                more premium benefits.
              </p>

              <button className="mt-5 rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-900">
                Manage Subscription
              </button>
            </div>

            <div className="rounded-3xl bg-black/15 p-6 backdrop-blur">
              <Crown size={70} className="mx-auto text-yellow-100" />

              <h3 className="mt-4 text-center text-lg font-semibold text-white">
                Premium Benefits
              </h3>

              <div className="mt-5 space-y-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Unlimited Wishlist
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Priority Booking
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Featured Hotel Listings
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Premium Customer Support
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} />
                  Exclusive Discounts
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-blue-700 p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white">
                <Sparkles size={14} />
                StayFinder Pro
              </span>

              <h2 className="mt-4 text-2xl font-bold text-white">
                Upgrade Your Experience
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-gray-200">
                Unlock unlimited wishlist, premium hotel listings, priority
                booking, exclusive discounts and 24/7 premium support.
              </p>

              <form action="/api/subscription" method="POST">
                <button type="submit" className="mt-5 cursor-pointer rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-gray-300 duration-300">
                Upgrade Now
              </button>
              </form>

            </div>

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10">
              <Crown size={55} className="text-yellow-300" />
            </div>
          </div>
        </section>
      )}

      {/* Features */}

      <div className="grid gap-5 md:grid-cols-3">
        <div
          className={`rounded-2xl border p-5 ${
            isPro === 'pro'
              ? "border-yellow-500/20 bg-zinc-900"
              : "border-zinc-800 bg-zinc-900"
          }`}
        >
          <ShieldCheck
            size={22}
            className={isPro === 'pro' ? "text-yellow-400" : "text-orange-500"}
          />

          <h3 className="mt-3 text-base font-semibold text-white">
            {isPro === 'pro' ? "Priority Booking" : "Secure Booking"}
          </h3>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            {isPro === 'pro'
              ? "Your bookings are processed first with instant confirmations."
              : "Book hotels safely with secure payments and instant confirmation."}
          </p>
        </div>

        <div
          className={`rounded-2xl border p-5 ${
            isPro === 'pro'
              ? "border-yellow-500/20 bg-zinc-900"
              : "border-zinc-800 bg-zinc-900"
          }`}
        >
          <Star
            size={22}
            className={isPro === 'pro' ? "text-yellow-400" : "text-orange-500"}
          />

          <h3 className="mt-3 text-base font-semibold text-white">
            {isPro === 'pro' ? "VIP Hotel Access" : "Top Rated Hotels"}
          </h3>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            {isPro === 'pro'
              ? "Access premium partner hotels with exclusive member-only deals."
              : "Explore thousands of verified hotels with trusted reviews."}
          </p>
        </div>

        <div
          className={`rounded-2xl border p-5 ${
            isPro === 'pro'
              ? "border-yellow-500/20 bg-zinc-900"
              : "border-zinc-800 bg-zinc-900"
          }`}
        >
          <Sparkles
            size={22}
            className={isPro === 'pro' ? "text-yellow-400" : "text-orange-500"}
          />

          <h3 className="mt-3 text-base font-semibold text-white">
            {isPro === 'pro' ? "AI Travel Assistant" : "Personalized Picks"}
          </h3>

          <p className="mt-2 text-xs leading-5 text-zinc-400">
            {isPro === 'pro'
              ? "Receive AI-powered travel recommendations and smart planning."
              : "Get hotel recommendations based on your interests and searches."}
          </p>
        </div>
      </div>
    </div>
  );
}
