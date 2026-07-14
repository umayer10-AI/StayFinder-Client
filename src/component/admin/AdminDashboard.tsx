"use client";

import Link from "next/link";
import {
  Users,
  Building2,
  CalendarCheck,
  CreditCard,
  DollarSign,
  Crown,
  ShieldBan,
  TrendingUp,
  ArrowRight,
} from "lucide-react";


export default function AdminDashboard({users,countHotels,allBookings,transactions,planPro,blockList}: any) {

    const stats = [
      {
        title: "Total Users",
        value: users || "1,248",
        icon: Users,
        color: "text-blue-400",
        border: "border-blue-500/30",
        bg: "bg-blue-500/10",
      },
      {
        title: "Hotels",
        value: countHotels || "86",
        icon: Building2,
        color: "text-emerald-400",
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/10",
      },
      {
        title: "Bookings",
        value: allBookings || "542",
        icon: CalendarCheck,
        color: "text-violet-400",
        border: "border-violet-500/30",
        bg: "bg-violet-500/10",
      },
      {
        title: "Transactions",
        value: transactions || "517",
        icon: CreditCard,
        color: "text-cyan-400",
        border: "border-cyan-500/30",
        bg: "bg-cyan-500/10",
      },
      {
        title: "Revenue",
        value: "$12,450",
        icon: DollarSign,
        color: "text-orange-400",
        border: "border-orange-500/30",
        bg: "bg-orange-500/10",
      },
      {
        title: "Pro Users",
        value: planPro || "321",
        icon: Crown,
        color: "text-yellow-400",
        border: "border-yellow-500/30",
        bg: "bg-yellow-500/10",
      },
      {
        title: "Blocked Users",
        value: blockList || "9",
        icon: ShieldBan,
        color: "text-red-400",
        border: "border-red-500/30",
        bg: "bg-red-500/10",
      },
      {
        title: "Growth",
        value: "+18%",
        icon: TrendingUp,
        color: "text-pink-400",
        border: "border-pink-500/30",
        bg: "bg-pink-500/10",
      },
    ];

  return (
    <div className="min-h-screen bg-zinc-950 p-6">

      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Welcome Back 👋
          </h1>

          <p className="mt-2 text-zinc-400">
            Monitor your StayFinder platform from one place.
          </p>
        </div>

        <Link
          href="/dashboard/admin/hotels"
          className="flex w-fit items-center gap-2 rounded-xl border border-emerald-500/40 px-5 py-3 text-emerald-400 transition hover:bg-emerald-500/10"
        >
          Manage Hotels
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`rounded-2xl border ${item.border} bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-zinc-600`}
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-zinc-400">
                    {item.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-bold text-white">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`rounded-xl ${item.bg} p-4`}
                >
                  <Icon
                    className={item.color}
                    size={28}
                  />
                </div>
              </div>

              <div className="mt-6 h-1 w-full rounded-full bg-zinc-800">
                <div
                  className={`h-full rounded-full ${item.bg}`}
                  style={{
                    width: `${55 + index * 5}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* ========= PART 2 এখান থেকে শুরু হবে ========= */}
            {/* Analytics + Activity */}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">

        {/* Revenue Analytics */}

        <div className="lg:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                Revenue Analytics
              </h2>

              <p className="mt-1 text-sm text-zinc-400">
                Revenue generated in the last 6 months
              </p>
            </div>

            <span className="rounded-lg border border-emerald-500/30 px-3 py-1 text-sm text-emerald-400">
              +18%
            </span>
          </div>

          <div className="flex h-[340px] items-end justify-between gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-6">

            {[
              { month: "Jan", value: 45 },
              { month: "Feb", value: 68 },
              { month: "Mar", value: 80 },
              { month: "Apr", value: 62 },
              { month: "May", value: 92 },
              { month: "Jun", value: 100 },
            ].map((item, index) => (

              <div
                key={index}
                className="flex flex-1 flex-col items-center justify-end"
              >

                <span className="mb-2 text-xs text-zinc-500">
                  ${item.value * 100}
                </span>

                <div
                  style={{
                    height: `${item.value * 2.4}px`,
                  }}
                  className="w-full rounded-t-xl bg-gradient-to-t from-emerald-600 to-emerald-400 transition hover:scale-105"
                />

                <span className="mt-3 text-sm text-zinc-400">
                  {item.month}
                </span>

              </div>

            ))}

          </div>
        </div>

        {/* Recent Activity */}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="text-2xl font-semibold text-white">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Latest activities on StayFinder
          </p>

          <div className="mt-6 space-y-5">

            {[
              {
                title: "New Hotel Added",
                desc: "Hilton Resort was added",
                color: "bg-emerald-500",
              },
              {
                title: "Booking Completed",
                desc: "Booking #1023 completed",
                color: "bg-blue-500",
              },
              {
                title: "New User Joined",
                desc: "John Doe created account",
                color: "bg-violet-500",
              },
              {
                title: "Pro Subscription",
                desc: "Alice upgraded to Pro",
                color: "bg-yellow-500",
              },
              {
                title: "User Blocked",
                desc: "Rahim has been blocked",
                color: "bg-red-500",
              },
            ].map((activity, index) => (

              <div
                key={index}
                className="flex items-start gap-4"
              >

                <div
                  className={`mt-1 h-3 w-3 rounded-full ${activity.color}`}
                />

                <div>

                  <h3 className="font-medium text-white">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    {activity.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>

      </div>

      {/* Booking Statistics */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="text-lg font-semibold text-white">
            Pending Bookings
          </h3>

          <h1 className="mt-4 text-5xl font-bold text-yellow-400">
            32
          </h1>

          <p className="mt-3 text-zinc-400">
            Awaiting confirmation.
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="text-lg font-semibold text-white">
            Confirmed
          </h3>

          <h1 className="mt-4 text-5xl font-bold text-emerald-400">
            218
          </h1>

          <p className="mt-3 text-zinc-400">
            Successfully confirmed bookings.
          </p>

        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h3 className="text-lg font-semibold text-white">
            Cancelled
          </h3>

          <h1 className="mt-4 text-5xl font-bold text-red-400">
            12
          </h1>

          <p className="mt-3 text-zinc-400">
            Cancelled bookings.
          </p>

        </div>

      </div>

      {/* ========= PART 3 এখান থেকে শুরু হবে ========= */}
            {/* Quick Actions */}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        {/* Quick Actions */}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="text-2xl font-semibold text-white">
            Quick Actions
          </h2>

          <p className="mt-1 text-zinc-400">
            Frequently used admin shortcuts.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <Link
              href="/dashboard/admin/manage-hotels"
              className="rounded-xl border border-emerald-500/30 p-5 transition hover:bg-emerald-500/10"
            >
              <Building2 className="mb-4 text-emerald-400" size={28} />

              <h3 className="font-semibold text-white">
                Manage Hotels
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Add, update or remove hotels.
              </p>
            </Link>

            <Link
              href="/dashboard/admin/manage-users"
              className="rounded-xl border border-blue-500/30 p-5 transition hover:bg-blue-500/10"
            >
              <Users className="mb-4 text-blue-400" size={28} />

              <h3 className="font-semibold text-white">
                Manage Users
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                View and control registered users.
              </p>
            </Link>

            <Link
              href="/dashboard/admin/manage-bookings"
              className="rounded-xl border border-violet-500/30 p-5 transition hover:bg-violet-500/10"
            >
              <CalendarCheck
                className="mb-4 text-violet-400"
                size={28}
              />

              <h3 className="font-semibold text-white">
                Manage Bookings
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Review all hotel bookings.
              </p>
            </Link>

            <Link
              href="/dashboard/admin/transactions"
              className="rounded-xl border border-cyan-500/30 p-5 transition hover:bg-cyan-500/10"
            >
              <CreditCard
                className="mb-4 text-cyan-400"
                size={28}
              />

              <h3 className="font-semibold text-white">
                Transactions
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                Monitor payments & revenue.
              </p>
            </Link>

          </div>

        </div>

        {/* Platform Summary */}

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="text-2xl font-semibold text-white">
            Platform Summary
          </h2>

          <p className="mt-1 text-zinc-400">
            Overall system health.
          </p>

          <div className="mt-8 space-y-6">

            {[
              {
                label: "Server Uptime",
                value: "99.98%",
                color: "bg-emerald-500",
                width: "w-[99%]",
              },
              {
                label: "Booking Success",
                value: "94%",
                color: "bg-blue-500",
                width: "w-[94%]",
              },
              {
                label: "Payments Completed",
                value: "91%",
                color: "bg-yellow-500",
                width: "w-[91%]",
              },
              {
                label: "User Satisfaction",
                value: "97%",
                color: "bg-pink-500",
                width: "w-[97%]",
              },
            ].map((item, index) => (

              <div key={index}>

                <div className="mb-2 flex justify-between">

                  <span className="text-zinc-300">
                    {item.label}
                  </span>

                  <span className="text-white">
                    {item.value}
                  </span>

                </div>

                <div className="h-2 rounded-full bg-zinc-800">

                  <div
                    className={`h-full rounded-full ${item.color} ${item.width}`}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-xl font-semibold text-white">
              StayFinder Admin Dashboard
            </h2>

            <p className="mt-2 text-zinc-400">
              Monitor users, hotels, bookings and revenue from one
              place.
            </p>

          </div>

          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-3">

            <span className="font-medium text-emerald-400">
              System Status : Online 🟢
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}