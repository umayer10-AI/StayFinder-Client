import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { subscriptionWork } from "@/lib/api/action";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const status = session.status;
  const metadata = session.metadata;
  const customerEmail = session.customer_details?.email ?? null;

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {

    const result = await subscriptionWork({...metadata, session_id})
    // console.log({...metadata, session_id})

    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4">
        <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
          {/* Success Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>

          {/* Heading */}
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold text-white">
              Payment Successful 🎉
            </h1>

            <p className="mt-2 text-sm text-zinc-400">
              Your hotel booking has been confirmed.
            </p>
          </div>

          {/* Email Card */}
          <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">
              Confirmation Email
            </p>

            <p className="mt-2 break-all font-medium text-white">
              {customerEmail}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <Link
              href="/dashboard/customer"
              className="flex-1 rounded-xl bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Dashboard
            </Link>

            <Link
              href="/"
              className="flex-1 rounded-xl border border-zinc-700 px-4 py-3 text-center font-semibold text-zinc-300 transition hover:bg-zinc-800"
            >
              Home
            </Link>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-zinc-500">
            Thank you for choosing <span className="font-semibold text-green-500">StayFinder</span>.
          </p>
        </div>
      </main>
    );
  }
}