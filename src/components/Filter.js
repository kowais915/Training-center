import React, {useState} from 'react';
import {filter, status} from '../styles/filter.module.css';
import {graphql, useStaticQuery } from 'gatsby';

const Filter = ({filterChange, item}) => {

    const [selectedItem, setSelectedItem ] = useState("all");

    const filters = [
        {label: "stable ", value: "stable "}, 
        {label: "alpha ", value: "alpha "}, 
        {label: "beta ", value: "beta"},
        {label: "all ", value: "all"}
    ];


// a function that handles if user selects a different value from the dropdown

const dropHandle = (event )=>{
    setSelectedItem(event.target.value)
}

    return (  
        <div className={filter}>
                <div className={status}>
                    <label htmlFor="dropdown">Status</label>
                    <select name="status" value={selectedItem} onChange={dropHandle} id="dropdown">
                        <option value="">Select</option>



                        {filters.map(({label, value})=>(
                            <option value={value} key={value}>{label}</option>
                        ))}
                        
                       
                    </select>

                </div>


                {/* <div className={status}>
                    <label htmlFor="checkbox">Videos</label>
                    <input type="checkbox" id='checkbox' name='videos'/>

                </div> */}


        </div>
    );
}
 
export default Filter;