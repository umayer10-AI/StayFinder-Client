import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { serverSession } from '@/lib/sessoin';


export async function POST(request: Request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const user = await serverSession();
    console.log({ user });

    const formData = await request.formData();
    const hotelName = String(formData.get("hotelName") ?? "");
    const userId = String(formData.get("userId") ?? "");
    const price = Number(4000.99);
    const hotelId = String(formData.get("hotelId") ?? "");

    // const PRICE_ID = 'price_1TsHTvB4qYm1kQq07lCondDf'

    const session = await stripe.checkout.sessions.create({
        customer_email: user?.email,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Number(price) * 100,
            product_data: {
              name: hotelName,
            }
        },
          quantity: 1,
        },
      ],
      metadata: {
        price: Number(price),
        userId: user?.id ?? null,
        userEmail: user?.email ?? null,
        hotelName,
        hotelId,
      },
      mode: 'payment',
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
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