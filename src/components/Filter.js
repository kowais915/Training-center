import React from 'react';
import {filter, status} from '../styles/filter.module.css';

const Filter = () => {
    return (  
        <div className={filter}>
                <div className={status}>
                    <label htmlFor="dropdown">Status</label>
                    <select name="status" id="dropdown">
                        <option value="stable">stable</option>
                        <option value="beta">beta</option>
                        <option value="alpha">alpha</option>
                    </select>

                </div>


                <div className={status}>
                    <label htmlFor="checkbox">Videos</label>
                    <input type="checkbox" id='checkbox' name='videos'/>

                </div>
        </div>
    );
}
 
export default Filter;