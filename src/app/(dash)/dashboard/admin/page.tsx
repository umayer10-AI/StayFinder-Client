import AdminDashboard from '@/component/admin/AdminDashboard';
import { adminBooking, adminIsBlock, adminPlanPro, adminTransictions, manageHotels, manageUsers } from '@/lib/api/get';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const totalUsers = await manageUsers(token)
    const totalHotels = await manageHotels(token)
    const allBookings = await adminBooking()
    const transactions = await adminTransictions(token)
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