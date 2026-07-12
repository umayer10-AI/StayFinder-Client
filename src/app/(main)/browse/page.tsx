import AllCards from '@/component/AllCards';
import { allHotelsData } from '@/lib/api/get';
import React from 'react';

const page = async () => {

    const hotels = await allHotelsData()
    // console.log(hotels)

    return (
        <div className='max-w-[80%] mx-auto mb-20'>
            <AllCards hotels={hotels}></AllCards>
        </div>
    );
};

export default page;