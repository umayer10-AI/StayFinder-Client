"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaHotel, FaUser, FaGoogle, FaArrowRight } from "react-icons/fa";
import { MdEmail, MdLock, MdImage } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

type FormData = {
  name: string;
  email: string;
  image: string;
  password: string;
};

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (v: FormData) => {
    console.log(v);

    const { data, error } = await authClient.signUp.email({
        name: v.name,
        email: v.email,
        password: v.password,
        image: v.image,
        callbackURL: "/",
    });

    if(data){
        alert("Register Succesfully")
        redirect('/')
    }
    if(error){
        alert(error.message)
    }

  };

  const handleGoogle = async() => {
    await authClient.signIn.social({
        provider: "google",
    });
  }

  return (
    <section className="flex items-center justify-center bg-slate-950 px-4 py-5">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">

        {/* Logo */}
        <div className="mb-5 flex flex-col items-center">
          <div className="rounded-2xl bg-gradient-to-r from-orange-600 to-orange-400 p-3">
            <FaHotel className="text-xl text-white" />
          </div>

          <h1 className="mt-2 text-2xl font-bold text-white">
            Create <span className="text-orange-400">Account</span>
          </h1>
{/* 
          <p className=" text-center text-sm text-slate-400">
            Join StayFinder and start booking your next stay.
          </p> */}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <FaUser className="text-slate-400" />

              <input
                {...register("name", {
                  required: "Name is required",
                })}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <MdEmail className="text-xl text-slate-400" />

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="example@gmail.com"
                className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Photo URL
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <MdImage className="text-xl text-slate-400" />

              <input
                {...register("image", {
                  required: "Photo URL is required",
                })}
                type="text"
                placeholder="https://example.com/photo.jpg"
                className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-500"
              />
            </div>

            {errors.image && (
              <p className="mt-1 text-sm text-red-500">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm text-slate-300">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-slate-700 bg-slate-800 px-4">
              <MdLock className="text-xl text-slate-400" />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeOff className="text-xl text-slate-400" />
                ) : (
                  <IoEye className="text-xl text-slate-400" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>          {/* Register Button */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 py-2 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:from-orange-500 hover:to-orange-300"
          >
            Create Account
            <FaArrowRight />
          </button>

          {/* Divider */}
          <div className="relative">
            <div className="border-t border-slate-700"></div>

            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-4 text-sm text-slate-400">
              OR
            </span>
          </div>

          {/* Google Button */}
          <button
          onClick={handleGoogle}
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 bg-slate-800 py-2 font-medium text-white transition-all duration-300 hover:border-orange-500 hover:bg-slate-700"
          >
            <FaGoogle className="text-lg text-orange-400" />
            Continue with Google
          </button>
        </form>

        {/* Footer */}
        <p className="mt-3 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-orange-400 transition hover:text-orange-300"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}