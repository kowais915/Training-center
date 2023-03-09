import React from 'react';
import {filter, status} from '../styles/filter.module.css';
import {useState } from 'react';
import {graphql } from 'gatsby'
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
             <select value={selected} onChange={handleStatus}>
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


             <label >
                <input type="checkbox"
                checked={videoAvailable}
                onChange ={checkboxHandler} 
                
                
                />
                videos

             </label>
        </div>
    );
}
 
export default Filter;