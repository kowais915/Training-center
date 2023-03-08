import React from 'react'
import  {Link } from 'gatsby'


const Navbar= () => {
    return (  
            <nav>
                {/* site title */}
                <h2>Training Center</h2>
                

                {/* links */}
                <div className="links">
                    <Link to="/" >Home</Link>
                    <Link to="/about" >About</Link>
                    <Link to="/" >Contact</Link>
                    
                
                </div>
            </nav>


    )
}
 
export default Navbar;