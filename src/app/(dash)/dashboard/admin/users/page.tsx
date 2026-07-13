import ManageUsers from '@/component/admin/ManageUser';
import { manageUsers } from '@/lib/api/get';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    const users = await manageUsers(token)
    // console.log(users)

    return (
        <div>
            <ManageUsers users={users}></ManageUsers>
        </div>
    );
};

export default page;