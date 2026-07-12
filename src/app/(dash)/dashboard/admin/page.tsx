import AdminDashboard from '@/component/admin/AdminDashboard';
import { adminBooking, adminIsBlock, adminPlanPro, adminTransictions, manageHotels, manageUsers } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const totalUsers = await manageUsers()
    const totalHotels = await manageHotels()
    const allBookings = await adminBooking()
    const transactions = await adminTransictions()
    const planPro = await adminPlanPro()
    const blockList = await adminIsBlock()
    console.log(blockList.length)

    return (
        <div>
            <AdminDashboard 

            users={totalUsers.length} 
            countHotels={totalHotels.length}
            allBookings={allBookings.length}
            transactions={transactions.length}
            planPro={planPro.length}
            blockList={blockList.length}
            >

            </AdminDashboard>
        </div>
    );
};

export default page;