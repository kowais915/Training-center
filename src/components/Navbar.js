import React from 'react'
import  {Link } from 'gatsby';
import {navbar, flexLinks, link, li, title} from '../styles/navbar.module.css';


const Navbar= () => {
    return (  
            <nav className={navbar}>
                {/* site title */}
                <h1 className={title}>Training Center</h1>
                

                {/* links */}
                <div >
                    
                 

                    <ul className={[flexLinks]}> 
                        <li className={li}><Link to="/" className={link}>Home</Link></li>
                        <li className={li}><Link to="/about" className={link} >About</Link></li>
                        <li className={li}><Link to="/" className={link}>Github</Link></li>
                    </ul>
                    
                
                </div>
            </nav>


    )
}
 
export default Navbar;