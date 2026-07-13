import CustomerTransiction from '@/component/customer/CustomerTransiction';
import { userTransiction } from '@/lib/api/get';
import { auth } from '@/lib/auth';
import { serverSession } from '@/lib/sessoin';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    const user = await serverSession()
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