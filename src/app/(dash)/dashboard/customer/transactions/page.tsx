import CustomerTransiction from '@/component/customer/CustomerTransiction';
import { userTransiction } from '@/lib/api/get';
import { serverSession } from '@/lib/sessoin';
import React from 'react';

const page = async () => {

    const user = await serverSession()
    const transactions = await userTransiction(user?.id)
    console.log(transactions)

    return (
        <div>
            <CustomerTransiction transactions={transactions}></CustomerTransiction>
        </div>
    );
};

export default page;