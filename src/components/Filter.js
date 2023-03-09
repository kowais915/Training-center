import React from 'react';
import {filter, status} from '../styles/filter.module.css';
import {useState } from 'react';
import {graphql } from 'gatsby'

import {title, dropdown, video, checkboxText} from '../styles/filter.module.css';
import e from 'cors';





const Filter = ({status, onFilterSelection}) => {

const [selected, setSelected ] = useState('');
const[videoAvailable, setVideoAvailable ] = useState(false);


// functions to handle the filters
const handleStatus = (e)=>{
    setSelected(e.target.value )
    onFilterSelection(e.target.value, videoAvailable);

}

// funtion to handle the checkbox

const checkboxHandler = (e )=>{
    setVideoAvailable(e.target.checked)
    onFilterSelection(selected, e.target.checked)
}





    return (  
        <div className={filter}>
             <h3 className={title}>Filter</h3>

             <select className={dropdown} value={selected} onChange={handleStatus}>
                    <option value="">
                        All
                    </option>

                    {status.map((cat )=>{
                        return(
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        )
                    })}

             </select>


             <label className={video} >
                <input  type="checkbox"
                checked={videoAvailable}
                onChange ={checkboxHandler} 
                className={checkboxText}
                />
                videos

             </label>
        </div>
    );
}
 
export default Filter;