import React from "react"
import Filter from "../components/Filter"
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import TrainingModule from "../components/TrainingModule"
import {useState } from 'react'
import {graphql} from 'gatsby'



export default function Home({data}) {


  
  const [filtered, setFiltered ] = useState(data.allTrainingModulesYaml.nodes);
  const modules = data.allTrainingModulesYaml.nodes;

  
  let videoAvailable = false;

  if(modules.videos ==''){
    videoAvailable = false;

  }else{
    videoAvailable = true;
  }


  // function to handle change
  const changeHandler = (status, videoAvailable )=>{
    let filteredModules = data.allTrainingModulesYaml.nodes;
    
    if(status ){
      filteredModules = filteredModules.filter((node )=>{
        return(
          node.status === status
        )
      })
    }


    if(videoAvailable ){
      filteredModules = filteredModules.filter((node )=>{
        return(
          node.videos
        )
      })
    }

    setFiltered(filteredModules)
  }


  return (
    
    <Layout>

      <div className="main">


       {/* filter */}
            <div className="filter">




                    <Filter
                      status={['alpha', 'beta', 'stable']}
                      onFilterSelection ={changeHandler}
                    
                    />


            </div>





        {/* training modules */}

              <div className="modules">


                 {

                    
                    filtered.map((mod)=>{
                     
        
                      return(
        
                        <TrainingModule 
                        key  = {mod.id}
                        title={mod.name}
                        description ={mod.description}
                        repoLink={mod.repository}
                        videoLink={mod.videos}
                        pageLink={mod.webpage}
                        status={mod.status}
        
                      
                      />
                      )
                    })

                 }
                

              </div>







      </div>

    </Layout>



  )
}


export const query = graphql `
  query modules {
    allTrainingModulesYaml {
      nodes {
        name
        status
        videos
        webpage
        repository
        description
        id
      }
    }
  }
`