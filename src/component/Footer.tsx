"use client";

import Link from "next/link";
import { Hotel, Mail } from "lucide-react"; // Lucide-এর আইকনগুলো এখানে থাক
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"; // React-icons থেকে নেওয়া হলো

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-8">
      <div className="mx-auto max-w-[90%] px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="rounded-lg bg-orange-600 p-2">
                <Hotel className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Stay<span className="text-orange-400">Finder</span>
              </h2>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Making travel simple and comfortable. Discover your next dream stay with us.
            </p>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/about" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link href="/rooms" className="hover:text-orange-400 transition">Find Rooms</Link></li>
              <li><Link href="/dashboard" className="hover:text-orange-400 transition">Dashboard</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#" className="hover:text-orange-400 transition">FAQ</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-orange-400 transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition"><FaFacebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition"><FaTwitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition"><FaInstagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition"><FaGithub className="h-5 w-5" /></a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm">
              <Mail className="h-4 w-4" />
              <span>support@stayfinder.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2026 StayFinder. All rights reserved.</p>
          <p>Built with ❤️ by Umayer</p>
        </div>
      </div>
    </footer>
  );
}