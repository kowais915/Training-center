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
        </div>
    );
}
 
export default Filter;