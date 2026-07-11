"use client";

import { useEffect, useState } from "react";
import { Camera, Mail, User, Save } from "lucide-react";
import { authClient } from "@/lib/auth-client";

export default function Profile() {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [name, setName] = useState("");
  const [img, setImage] = useState("");

  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");

      setImage(user.image || "https://i.pravatar.cc/150?img=12");
    }
  }, [user]);

  // Cloudinary Upload

  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];

    if (!file) return;

    setUploading(true);

    const formData = new FormData();

    formData.append("file", file);

    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
    );

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,

        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      setImage(data.secure_url);
    } catch (error) {
      console.log(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    const profileData = {
      name,

      image: img,
    };

    console.log("Profile Data:", profileData);

    const { data, error } = await authClient.updateUser({
      name: name,

      image: img,
    });

    if (error) {
      console.log(error);

      alert("Update failed");

      return;
    }

    console.log(data);

    alert("Profile updated successfully");
  };

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
      from-slate-950
      via-slate-900
      to-emerald-950
      flex
      items-center
      justify-center
      p-6
      "
    >
      <div
        className="
        w-full
        max-w-lg
        bg-slate-900/80
        backdrop-blur-xl
        rounded-3xl
        p-8
        border
        border-emerald-500/20
        shadow-2xl
        "
      >
        {/* Header */}

        <div className="text-center mb-8">
          <h1
            className="
            text-3xl
            font-bold
            text-white
            "
          >
            My Profile
          </h1>

          <p
            className="
            text-slate-400
            mt-2
            "
          >
            Manage your account details
          </p>
        </div>

        {/* Profile Image */}

        <div
          className="
          flex
          justify-center
          mb-8
          relative
          "
        >
          {uploading ? (
            <div
              className="
                w-36
                h-36
                rounded-full
                bg-slate-700
                animate-pulse
                "
            />
          ) : (
            <img
              src={img || "https://i.pravatar.cc/150?img=12"}
              className="
                w-36
                h-36
                rounded-full
                object-cover
                border-4
                border-emerald-500
                shadow-lg
                shadow-emerald-500/30
                "
              alt="profile"
            />
          )}

          <label
            htmlFor="image"
            className="
            absolute
            bottom-2
            right-[34%]
            bg-emerald-500
            hover:bg-emerald-600
            text-white
            p-3
            rounded-full
            cursor-pointer
            transition
            "
          >
            <Camera size={20} />
          </label>

          <input
            id="image"
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Name */}

        <div className="mb-5">
          <label
            className="
            text-sm
            font-medium
            text-slate-300
            "
          >
            Full Name
          </label>

          <div
            className="
            mt-2
            flex
            items-center
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            focus-within:border-emerald-500
            "
          >
            <User size={20} className="text-emerald-400 mr-3" />

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
              bg-transparent
              outline-none
              text-white
              w-full
              "
            />
          </div>
        </div>

        {/* Email */}

        <div className="mb-7">
          <label
            className="
            text-sm
            font-medium
            text-slate-300
            "
          >
            Email
          </label>

          <div
            className="
            mt-2
            flex
            items-center
            bg-slate-800
            border
            border-slate-700
            rounded-xl
            px-4
            py-3
            "
          >
            <Mail size={20} className="text-emerald-400 mr-3" />

            <input
              disabled
              value={user?.email || ""}
              className="
              bg-transparent
              text-slate-400
              outline-none
              w-full
              "
            />
          </div>
        </div>

        {/* Save Button */}

        <button
          onClick={handleSubmit}
          disabled={uploading}
          className="
          w-full
          flex
          justify-center
          items-center
          gap-2
          py-3
          rounded-xl
          font-semibold
          text-white
          bg-gradient-to-r
          from-emerald-500
          to-teal-500
          hover:scale-[1.02]
          transition
          shadow-lg
          shadow-emerald-500/20
          disabled:opacity-50
          "
        >
          <Save size={20} />

          {uploading ? "Uploading..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}
