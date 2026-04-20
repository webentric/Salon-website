import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import Story from '../components/Story'
import Testimonials from '../components/Testimonials'
import Map from '../components/Map'

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <AboutUs />
            <Story />
            <Testimonials />
            <Map />
        </div>
    )
}

export default Home
