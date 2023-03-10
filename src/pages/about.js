import React from 'react'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
const About = () => {
    return ( 

       
        <Layout>

           <div className="about">
           <h1>About</h1>
            <p>This website is being developed in response to the qualification task for GSoC 2023. The site has been developed using Gatsby. The data is source is an YAML file which is queired by graphql. Both the status and the videos filters are working. </p>
           </div>

        </Layout>
            
          
      
     );
}
 
export default About;