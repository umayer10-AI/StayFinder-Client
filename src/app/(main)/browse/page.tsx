import AllCards from '@/component/AllCards';
import { allHotelsData } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const hotels = await allHotelsData()

    return (
        <div className='max-w-[80%] mx-auto'>
            <AllCards hotels={hotels}></AllCards>
        </div>
    );
};

export default page;