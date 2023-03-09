import { graphql } from "gatsby"
import React from "react"
import Filter from "../components/Filter"
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import TrainingModule from "../components/TrainingModule"

export default function Home({data}) {


 
  const trainingModules = data.allTrainingModulesYaml.nodes;
  console.log(trainingModules);


  return (
    
    <Layout>

      <div className="main">
        {/* filter */}
      
      <div className="filter">
        <Filter/>
      </div>





        {/* training modules */}

        <div className="modules">


         

       
           {
            trainingModules.map((mod)=>{
              console.log(mod.name);

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


// exporting query

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