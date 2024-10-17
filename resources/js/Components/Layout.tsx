import React from "react";
import Header from "./Common/Header";
import Sidebar from "./Common/Sidebar";
import Footer from "./Common/Footer";
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />

            <Sidebar />

            <main id="main" className="main">
                {children}
            </main>

            <Footer />
        </>
    );
};
export default Layout;
