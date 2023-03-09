import React from 'react';
import {Link } from 'gatsby';
import { FaGithub, FaGlobe, FaYoutube } from 'react-icons/fa';
import { train, stable, stableText, github, alpbeta, icon } from '../styles/training.module.css';

const TrainingModule = ({title, status, description, repoLink, pageLink, videoLink}) => {
   
    let statusBool = false;

    if(status == 'stable'){
        statusBool = true;
    }
   

    // handling when there is no video link

    let video = true;

    if(videoLink == ''){
        video = false;
    }


    return ( 
            <div className={statusBool ? stable: train}>

                {statusBool ? <p className={stableText}>Stable </p> : <p className={alpbeta}>{status}</p> }
                <h2>{title}</h2>
                <p>{description}</p>

                <Link className={github} to={repoLink}> <FaGithub className={icon} size={20} color="black" /> Github</Link>
                <Link className={github} to={pageLink}> <FaGlobe className={icon} size={20} color="black"/>  Website</Link>
                {video ? <Link className={github} to={videoLink}><FaYoutube className={icon}  size={20} color="red"/>Video</Link> : null}
               

            </div>


     );
}
 
export default TrainingModule;