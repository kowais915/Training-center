import React from 'react';
import {Link } from 'gatsby';
import { train } from '../styles/training.module.css';

const TrainingModule = ({title, description, repoLink, pageLink, videoLink}) => {
    return ( 
            <div className={train}>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cum. Ipsa aspernatur placeat voluptatibus aliquid tempora assumenda quidem eius ratione!</p>

                <Link to={repoLink}>Github</Link>
                <Link to={pageLink}>Website</Link>
                <Link to={videoLink}>Watch Video</Link>

            </div>


     );
}
 
export default TrainingModule;