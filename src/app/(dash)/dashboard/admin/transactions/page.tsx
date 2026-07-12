import CustomerTransiction from '@/component/customer/CustomerTransiction';
import { adminTransictions } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const transactions = await adminTransictions()
    // console.log(transactions)

    return (
        <div>
            <CustomerTransiction transactions={transactions}></CustomerTransiction>
        </div>
    );
};

export default page;