import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { serverSession } from '@/lib/sessoin';


export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const user = await serverSession()

    const formData = await request.formData()
    const hotelName = formData.get('hotelName')
    const userId = formData.get('userId')
    const price = Number(4000.99)
    const hotelId = formData.get('hotelId')

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
        userId: user?.id,
        userEmail: user?.email,
        hotelName,
        hotelId,
      },
      mode: 'payment',
      success_url: `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}