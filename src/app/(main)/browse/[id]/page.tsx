import Details from '@/component/Details';
import { singleHotelData } from '@/lib/api/get';
import React from 'react';

const page = async ({params}) => {

    const {id} = await params
    const hotel = await singleHotelData(id)
    // console.log(hotel)

    return (
        <div>
            <Details hotel={hotel}></Details>
        </div>
    );
};

export default page;