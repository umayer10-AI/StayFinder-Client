import AdminHotel from "@/component/admin/AdminHotel";
import { manageHotels } from "@/lib/api/get";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

interface Hotel {
  _id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  contact: string;
  price: string;
  image: string;
}

const Page = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const hotels: Hotel[] = await manageHotels(token);

  return (
    <div className="max-w-[90%] mx-auto bg-slate-950 py-5">
      <div className="mx-auto max-w-7xl rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
        {/* Header */}
        <div className="border-b border-slate-800 p-4">
          <h2 className="text-2xl font-bold text-white">
            Hotel List
          </h2>

          <p className="mt-1 text-slate-400">
            Manage all hotels
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Image
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Title
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Type
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-white">
                  Price
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {hotels.map((hotel) => (
                <AdminHotel
                  key={hotel._id}
                  hotel={hotel}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;