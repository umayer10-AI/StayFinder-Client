import BookingPage from '@/component/customer/Booking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const user = session?.user
    console.log(user?.id)
    const hotels = await get

    return (
        <div>
            <BookingPage hotels={hotels}></BookingPage>
        </div>
    );
};

export default page;