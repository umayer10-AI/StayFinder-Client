import Sidebar from '@/component/Sidebar';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <main className='w-full'>{children}</main>
        </div>
    );
};

export default layout;