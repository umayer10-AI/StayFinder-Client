"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Building2,
  FileText,
  MapPin,
  Phone,
  DollarSign,
  ImagePlus,
  Loader2,
} from "lucide-react";

const hotelTypes = [
  "Hotel",
  "Resort",
  "Apartment",
  "Villa",
  "Guest House",
  "Hostel",
];

const Page = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const uploadToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await response.json();
    return data.secure_url;
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      let imageUrl = "";
      if (data.image && data.image[0]) {
        imageUrl = await uploadToCloudinary(data.image[0]);
      }

      const finalData = { ...data, image: imageUrl };
      console.log("Form Submitted Successfully:", finalData);
      
      reset();
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-950 p-6">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="border-b border-slate-800 p-8">
          <h1 className="text-3xl font-bold text-white">Add New Hotel</h1>
          <p className="mt-2 text-slate-400">
            Fill in the information below to publish a new hotel.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Hotel Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Hotel Title</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" size={20} />
                <input {...register("title")} type="text" placeholder="Enter hotel title" className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500" />
              </div>
            </div>

            {/* Hotel Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Hotel Type</label>
              <div className="relative">
                <Building2 size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                <select {...register("type")} defaultValue="" className="h-12 w-full appearance-none rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-10 text-white outline-none transition focus:border-emerald-500">
                  <option value="" disabled>Select Hotel Type</option>
                  {hotelTypes.map((type) => (
                    <option key={type} value={type} className="bg-slate-900">{type}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4">
            <label className="mb-2 block text-sm font-semibold text-white">Description</label>
            <div className="relative">
              <FileText size={20} className="absolute left-4 top-4 text-emerald-500" />
              <textarea {...register("description")} rows={3} placeholder="Write hotel description..." className="w-full rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-4 pt-4 text-white outline-none transition focus:border-emerald-500"></textarea>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Location</label>
              <div className="relative">
                <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                <input {...register("location")} type="text" placeholder="Hotel location" className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Contact</label>
              <div className="relative">
                <Phone size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                <input {...register("contact")} type="text" placeholder="Phone or Email" className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500" />
              </div>
            </div>
          </div>

          {/* Price & Image */}
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Price Per Night</label>
              <div className="relative">
                <DollarSign size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500" />
                <input {...register("price")} type="number" placeholder="Enter price" className="h-12 w-full rounded-xl border border-slate-700 bg-slate-950 pl-12 pr-4 text-white outline-none transition focus:border-emerald-500" />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Hotel Image</label>
              <label className="flex h-12 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-slate-950 transition hover:border-emerald-500 hover:bg-slate-900">
                <div className="flex items-center gap-2">
                    <ImagePlus size={20} className="text-emerald-500" />
                    <span className="text-sm text-slate-300">Upload Image</span>
                </div>
                <input {...register("image")} type="file" accept="image/*" className="hidden" />
              </label>
            </div>

            {/* Image Upload */}

            {/* <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Hotel Image
              </label>

              <label className="flex h-25 w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 bg-slate-950 transition hover:border-emerald-500 hover:bg-slate-900">
                <ImagePlus
                  size={32}
                  className="mb-2 text-emerald-500"
                />

                <p className="text-sm text-slate-300">
                  Click to upload image
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  PNG, JPG or JPEG
                </p>

                <input {...register("image")} type="file" accept="image/*" className="hidden" />
              </label>
            </div> */}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
            <button type="button" onClick={() => reset()} className="rounded-xl border border-slate-700 px-8 py-2 font-semibold text-slate-300 transition hover:bg-slate-800">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-2 font-semibold text-white shadow-lg transition hover:from-emerald-600 hover:to-green-700 flex items-center justify-center">
              {loading ? <Loader2 className="animate-spin" /> : "Add Hotel"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;