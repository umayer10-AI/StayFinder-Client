import AddHotel from "@/component/customer/AddHotel";
import { serverSession } from "@/lib/sessoin";
import { Crown, Sparkles } from "lucide-react";
import { getuserHotelsData } from "@/lib/api/get";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Page = async () => {
  const user = await serverSession();

  if (!user) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <h2 className="text-xl font-semibold text-white">
          Unauthorized Access
        </h2>
      </div>
    );
  }

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const hotels = await getuserHotelsData(user.id, token);

  if (user.plan === "free" && hotels.length >= 2) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center px-4">
        <div className="w-full max-w-lg rounded-2xl border border-yellow-500/20 bg-zinc-900 p-8 text-center shadow-xl">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-500/10">
            <Crown className="h-10 w-10 text-yellow-400" />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-white">
            Upgrade to Premium
          </h2>

          <p className="mt-3 text-zinc-400">
            Free users can add up to{" "}
            <span className="font-semibold text-white">2 hotels</span>.
            You have reached your limit.
          </p>

          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4 text-left">
            <h3 className="mb-3 flex items-center gap-2 font-semibold text-white">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Premium Benefits
            </h3>

            <ul className="space-y-2 text-sm text-zinc-400">
              <li>✅ Unlimited hotel listings</li>
              <li>✅ Priority customer support</li>
              <li>✅ Featured hotel placement</li>
              <li>✅ More visibility & bookings</li>
            </ul>
          </div>

          <form action="/api/subscription" method="POST">
            <button
              type="submit"
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition hover:bg-yellow-400"
            >
              Upgrade Now
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <AddHotel />;
};

export default Page;