import ManageBooking from '@/component/admin/Manage-Admin';
import { adminBooking } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const bookings = await adminBooking()
    console.log(bookings)

    return (
        <div>
            <ManageBooking bookings={bookings}></ManageBooking>
        </div>
    );
};

export default page;