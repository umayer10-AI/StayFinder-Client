import Footer from '@/component/Footer';
import Navbar from '@/component/Navbar';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <Navbar></Navbar>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    );
};

export default layout;