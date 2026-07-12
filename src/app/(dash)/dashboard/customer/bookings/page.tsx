import UserBooking from '@/component/customer/UserBooking';
import { userBooking } from '@/lib/api/get';
import { serverSession } from '@/lib/sessoin';
import React from 'react';

const page = async () => {

  const user = await serverSession()
  const bookings = await userBooking(user?.id)
  console.log(bookings)

  return (
    <div>
      <UserBooking bookings={bookings}></UserBooking>
    </div>
  );
};

export default page;