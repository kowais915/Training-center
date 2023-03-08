import React from 'react';
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return (  
        <div className="layout">
            <Navbar/>

            {/* the content goes here */}
            <div className="body">
                {children}
            </div>


            {/* the footer goes here */}


        </div>




    );
}
 
export default Layout;