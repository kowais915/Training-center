import React from 'react'
import  {Link } from 'gatsby';
import {navbar} from '../styles/navbar.module.css';


const Navbar= () => {
    return (  
            <nav className={navbar}>
                {/* site title */}
                <h2>Training Center</h2>
                

                {/* links */}
                <div className="links">
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/" >Github</Link>
                    
                
                </div>
            </nav>


    )
}
 
export default Navbar;