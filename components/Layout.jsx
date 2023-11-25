import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
