import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />
            <div className='continer my-4'>
                <main>
                    <Outlet />
                </main>

            </div>
            <Footer />
        </>
    );
}

export default Layout;