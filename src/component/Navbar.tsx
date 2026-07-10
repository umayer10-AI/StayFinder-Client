"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Hotel,
  Menu,
  X,
  Home,
  Building2,
  CalendarDays,
  Heart,
  LayoutDashboard,
  Bell,
  User,
  ChevronDown,
  LogOut,
  Settings,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { data: session } = authClient.useSession()
  const user = session?.user
  console.log(user)


  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [pathname]);

  const guestRoutes = [
    { name: "Home", href: "/", icon: Home },
    { name: "Rooms", href: "/rooms", icon: Building2 },
    { name: "About", href: "/about", icon: Hotel },
  ];

  const userRoutes = [
    { name: "Home", href: "/", icon: Home },
    { name: "Rooms", href: "/rooms", icon: Building2 },
    { name: "Bookings", href: "/bookings", icon: CalendarDays },
    { name: "Wishlist", href: "/wishlist", icon: Heart },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  ];

  const routes = user ? userRoutes : guestRoutes;

  const a = async() => {
    await authClient.signOut()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-linear-to-r from-orange-600 to-orange-400 p-2">
            <Hotel className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-bold text-white">
            Stay<span className="text-orange-400">Finder</span>
          </h2>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.name}
                href={route.href}
                className={`flex items-center gap-2 text-sm rounded-lg px-3 py-1.5 transition ${
                  pathname === route.href
                    ? " bg-linear-to-r from-orange-600 to-orange-400 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-orange-400"
                }`}
              >
                <Icon className="h-4 w-4" />
                {route.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex">
          {user ? (
            <>
              <button className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 hover:text-orange-400">
                <Bell className="h-5 w-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 text-md rounded-lg bg-slate-900 px-3 py-2 text-white hover:bg-slate-800"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-semibold">{user?.name.charAt(0) || 'U'}</div>
                  <span>{user?.name.split(' ')[0]}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-56 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-xl">
                    <Link href="/profile" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800">
                      <User className="h-4 w-4" /> Profile
                    </Link>
                    <Link href="/settings" className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-300 hover:bg-slate-800">
                      <Settings className="h-4 w-4" /> Settings
                    </Link>
                    <hr className="my-2 border-slate-700" />
                    <button onClick={a} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-red-400 hover:bg-red-500/10">
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 text-slate-300 hover:text-orange-400">Login</Link>
              <Link href="/register" className="rounded-lg bg-orange-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-cyan-600">Register</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-slate-300 transition hover:bg-slate-800 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden p-4 space-y-2">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link
                key={route.name}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                  pathname === route.href ? "bg-orange-500 text-white" : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon className="h-5 w-5" /> {route.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
