import CustomerTransiction from '@/component/customer/CustomerTransiction';
import { userTransiction } from '@/lib/api/get';
import { auth } from '@/lib/auth';
import { serverSession } from '@/lib/sessoin';
import { headers } from 'next/headers';
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
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const transactions = await userTransiction(user?.id, token)
    console.log(transactions)

    return (
        <div>
            <CustomerTransiction transactions={transactions}></CustomerTransiction>
        </div>
    );
};

export default page;