"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  PlusSquare,
  Heart,
  User,
  CreditCard,
  Hotel,
  ClipboardList,
  Users,
  House,
  LogOut,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

const customerLinks = [
  {
    title: "Overview",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    title: "My hotel",
    href: "/dashboard/customer/my-hotel",
    icon: CalendarDays,
  },
  {
    title: "Add Hotel",
    href: "/dashboard/customer/add-hotel",
    icon: PlusSquare,
  },
  {
    title: "My Bookings",
    href: "/dashboard/customer/bookings",
    icon: CalendarDays,
  },
  {
    title: "Profile",
    href: "/dashboard/customer/profile",
    icon: User,
  },
  {
    title: "Transactions",
    href: "/dashboard/customer/transactions",
    icon: CreditCard,
  },
];

const adminLinks = [
  {
    title: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Hotels",
    href: "/dashboard/admin/hotels",
    icon: Hotel,
  },
  {
    title: "Manage Bookings",
    href: "/dashboard/admin/bookings",
    icon: ClipboardList,
  },
  {
    title: "Manage Users",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    title: "Profile",
    href: "/dashboard/admin/profile",
    icon: User,
  },
  {
    title: "Transactions",
    href: "/dashboard/admin/transactions",
    icon: CreditCard,
  },
];

    const a = async() => {
        await authClient.signOut()
        redirect('/')
    }

export default function Sidebar() {
  const pathname = usePathname();

  const { data } = authClient.useSession();
  const user = data?.user;
  const userAny = user as any;
  console.log(user)

  const links = userAny?.role === "admin" ? adminLinks : customerLinks;

  return (
    <aside className="flex h-screen sticky top-0 left-0 w-75 flex-col border-r border-slate-800 bg-slate-950">
      {/* User */}
      <div className="border-b border-slate-800 p-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src={
              user?.image ||
              "https://i.pravatar.cc/150?img=12"
            }
            alt="user"
            width={60}
            height={60}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-full h-20 w-20 border-2 border-orange-500 object-cover"
          />

          {
            userAny?.role === 'admin'? 
            <h2 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-orange-400 text-transparent bg-clip-text w-fit">Admin Panel</h2>
            : <div className="text-center">
            <h2 className="font-semibold text-white">
              {userAny?.name}
            </h2>

            <p className="text-sm text-slate-400">
              {userAny?.email}
            </p>

            <span className="mt-1 inline-block rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium capitalize text-orange-400">
              {userAny?.role}
            </span>
          </div>
          }

        </div>
      </div>

      {/* Links */}
      <div className="flex-1 space-y-1 p-5">
        {links.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-2 transition-all
              ${
                active
                  ? "bg-linear-to-r from-orange-600 via-orange-600 to-orange-400 text-white"
                  : "text-slate-300 hover:bg-slate-900 hover:text-orange-400"
              }`}
            >
              <Icon size={20} />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>

      {/* Bottom */}
      <div className="space-y-2 border-t border-slate-800 p-5">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-orange-400"
        >
          <House size={20} />
          Back to Home
        </Link>

        <button
          onClick={a}
          className="flex w-full items-center gap-3 rounded-xl px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}