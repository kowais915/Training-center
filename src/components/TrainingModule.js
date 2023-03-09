import React from 'react';
import {Link } from 'gatsby';
import { train } from '../styles/training.module.css';

const TrainingModule = ({title, status, description, repoLink, pageLink, videoLink}) => {
    return ( 
            <div className={train} >
                <h2>{title}</h2>
                <p>{description}</p>

                <Link to={repoLink}>Github</Link>
                <Link to={pageLink}>Website</Link>
                <Link to={videoLink}>Watch Video</Link>
                <div>
                    <h5>{status}</h5>
                </div>

            </div>


     );
}
 
export default TrainingModule;