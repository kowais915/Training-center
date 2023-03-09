import React, {useState} from 'react';
import {filter, status} from '../styles/filter.module.css';
import {graphql, useStaticQuery } from 'gatsby';
import TrainingModule from './TrainingModule';

const Filter = ({filterChange, item}) => {

    // using the useStaticQuery hook here
// const modules = useStaticQuery( graphql`
// query modules {
//     allTrainingModulesYaml {
//       nodes {
//         name
//         status
//         videos
//         webpage
//         repository
//         description
//         id
//       }
//     }
//   }


// `);

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



// filterd modules

// const filteredModules = modules.nodes.filter((node)=>{
//     node.fieldTofilter === selectedItem
// });


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

                {/* using the modules component here to render data based on filter */}

                {
                    // filteredModules.map((node)=>{
                    //     <TrainingModule 
                    //         title={node.name}
                    //         description = {node.description}
                        
                        
                    //     />
                    // })
                }

        </div>
    );
}
 
export default Filter;