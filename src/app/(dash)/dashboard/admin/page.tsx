import AdminDashboard from '@/component/admin/AdminDashboard';
import { adminBooking, adminTransictions, manageHotels, manageUsers } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const totalUsers = await manageUsers()
    const totalHotels = await manageHotels()
    const allBookings = await adminBooking()
    const transactions = await adminTransictions()
    console.log(transactions.length)

    return (
        <div>
            <AdminDashboard 

            users={totalUsers.length} 
            countHotels={totalHotels.length}
            allBookings={allBookings.length}
            transactions={transactions.length}
            >

            </AdminDashboard>
        </div>
    );
};

export default page;