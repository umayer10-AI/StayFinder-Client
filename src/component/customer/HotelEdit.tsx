import { Pencil } from 'lucide-react';
import React from 'react';

const HotelEdit = ({hotel}) => {

    console.log(hotel)
    
    return (
        <button className="rounded-lg cursor-pointer bg-blue-600 p-2 text-white transition hover:bg-blue-700">
            <Pencil size={18} />
        </button>
    );
};

export default HotelEdit;