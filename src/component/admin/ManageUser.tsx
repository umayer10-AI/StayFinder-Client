"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ManageUsers = ({ users }: any) => {
  const router = useRouter();

  const handleToggleBlock = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/users/block/${id}`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();

      if (data.modifiedCount > 0) {
        toast.success("User status updated");
        router.refresh();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-xl">
        {/* Header */}
        <div className="border-b border-zinc-800 p-6">
          <h1 className="text-3xl font-bold text-white">Manage Users</h1>
          <p className="mt-1 text-zinc-400">
            Manage all registered users.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-zinc-800 bg-zinc-900">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-300">
                  #
                </th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-300">
                  User
                </th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-300">
                  Email
                </th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-300">
                  Role
                </th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-300">
                  Plan
                </th>
                <th className="px-5 py-4 text-left text-sm font-semibold text-zinc-300">
                  Status
                </th>
                <th className="px-5 py-4 text-center text-sm font-semibold text-zinc-300">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {users?.map((user: any, index: number) => (
                <tr
                  key={user._id}
                  className="border-b border-zinc-800 transition hover:bg-zinc-800/40"
                >
                  <td className="px-5 py-4 text-zinc-400">{index + 1}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="h-12 w-12 rounded-full border border-zinc-700 object-cover"
                      />

                      <div>
                        <h2 className="font-medium text-white">
                          {user.name}
                        </h2>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-zinc-400">
                    {user.email}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full border border-blue-500 px-3 py-1 text-sm font-medium text-blue-400">
                      {user.role}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full border px-3 py-1 text-sm font-medium ${
                        user.plan === "pro"
                          ? "border-yellow-500 text-yellow-400"
                          : "border-zinc-500 text-zinc-400"
                      }`}
                    >
                      {user.plan}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    {user.isBlock ? (
                      <span className="rounded-full border border-red-500 px-3 py-1 text-sm font-medium text-red-400">
                        Blocked
                      </span>
                    ) : (
                      <span className="rounded-full border border-emerald-500 px-3 py-1 text-sm font-medium text-emerald-400">
                        Active
                      </span>
                    )}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => handleToggleBlock(user._id)}
                      className={`cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        user.isBlock
                          ? "border-emerald-500 text-emerald-400 hover:bg-emerald-500/10"
                          : "border-red-500 text-red-400 hover:bg-red-500/10"
                      }`}
                    >
                      {user.isBlock ? "Active" : "Block"}
                    </button>
                  </td>
                </tr>
              ))}

              {users?.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="py-12 text-center text-zinc-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;