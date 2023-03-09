import React from 'react';
import {Link } from 'gatsby';
import { train, stable, stableText } from '../styles/training.module.css';

const TrainingModule = ({title, status, description, repoLink, pageLink, videoLink}) => {
   
    let statusBool = false;

    if(status == 'stable'){
        statusBool = true;
    }
   
    return ( 
            <div className={statusBool ? stable: train}>

                {statusBool ? <p className={stableText}>Stable </p> : null }
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