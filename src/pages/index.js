import React from "react"
import Layout from "../components/Layout"
import Navbar from '../components/Navbar'
import TrainingModule from "../components/TrainingModule"

export default function Home() {
  return (
    
    <Layout>

      <div className="main">
        <TrainingModule/>
        <TrainingModule/>
        <TrainingModule/>
        <TrainingModule/>
      </div>

    </Layout>



  )
}
