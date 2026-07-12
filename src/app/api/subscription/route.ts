import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { serverSession } from '@/lib/sessoin';


export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const user = await serverSession()

    const session = await stripe.checkout.sessions.create({
        customer_email: user?.email,
      line_items: [
        {
          price: 'price_1TsEarB4qYm1kQq00GqC4KUD',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}