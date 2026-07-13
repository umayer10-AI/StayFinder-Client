import UserBooking from '@/component/customer/UserBooking';
import { userBooking } from '@/lib/api/get';
import { serverSession } from '@/lib/sessoin';
import React from 'react';

const page = async () => {

  const user = await serverSession()

  if (!user) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <h2 className="text-xl font-semibold text-white">
          Unauthorized Access
        </h2>
      </div>
    );
  }

  const bookings = await userBooking(user?.id)

  return (
    <div>
      <UserBooking bookings={bookings}></UserBooking>
    </div>
  );
};

export default page;