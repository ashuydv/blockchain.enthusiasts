import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
