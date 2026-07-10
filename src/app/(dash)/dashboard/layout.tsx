import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    );
};

export default layout;