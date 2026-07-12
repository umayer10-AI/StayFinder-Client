import ManageUsers from '@/component/admin/ManageUser';
import { manageUsers } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const users = await manageUsers()
    console.log(users)

    return (
        <div>
            <ManageUsers users={users}></ManageUsers>
        </div>
    );
};

export default page;