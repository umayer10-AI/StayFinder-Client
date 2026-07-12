import React from 'react';
import Card from './Card';

const AllCards = ({hotels}) => {

    console.log(hotels)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
                {
                 hotels.map(v => <Card key={v._id} hotel={v}></Card>)
                }
            </div>
            
        </div>
    );
};

export default AllCards;