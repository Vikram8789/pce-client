import React from 'react'
import Hero from '../components/Hero'
import Auth from '../components/Auth'
import Service from '../components/Service'
import Layout from '../components/Layout'

const Home = () => {
  return (
   <>
   <Layout>
   <Hero/>
   {/* <Auth/> */}
   <Service/>
   </Layout>
  
   </>
  )
}

export default Home