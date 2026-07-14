import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { serverSession } from '@/lib/sessoin';


export async function POST() {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const user = await serverSession();

    const PRICE_ID = "price_1TsEarB4qYm1kQq00GqC4KUD";

    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email ?? undefined,
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      metadata: {
        priceId: PRICE_ID,
        userId: user?.id ?? null,
        userEmail: user?.email ?? null,
      },
      mode: "subscription",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url as string, 303);
  } catch (err) {
    const e: any = err;
    return NextResponse.json(
      { error: e?.message ?? String(e) },
      { status: (e?.statusCode as number) || 500 }
    );
  }
}