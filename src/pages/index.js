import React from "react"
import Filter from "../components/Filter"
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import TrainingModule from "../components/TrainingModule"

export default function Home() {
  return (
    
    <Layout>

      <div className="main">
        {/* filter */}
      
      <div className="filter">
        <Filter/>
      </div>





        {/* training modules */}

        <div className="modules">


            <TrainingModule/>
            <TrainingModule/>
            <TrainingModule/>
            <TrainingModule/>
            <TrainingModule/>
            <TrainingModule/>

        </div>
      </div>

    </Layout>



  )
}
