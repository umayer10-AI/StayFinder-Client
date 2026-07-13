import AdminTransiction from '@/component/admin/AdminTransiction';
import { adminTransictions } from '@/lib/api/get';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

import React from 'react';

const page = async () => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const transactions = await adminTransictions(token)
    // console.log(transactions)

    return (
        <div>
            <AdminTransiction transactions={transactions}></AdminTransiction>
        </div>
    );
};

export default page;