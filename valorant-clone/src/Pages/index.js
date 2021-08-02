import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import News from '../Components/LatestNews'
import Footer from '../Components/Footer'
import InfoSection from '../Components/InfoSection'
import { infoOne, infoTwo, infoThree } from '../Components/InfoSection/Data'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <News />
            <InfoSection {...infoOne}/>
            <InfoSection {...infoTwo}/>
            <InfoSection {...infoThree}/>
            <Footer />
        </>
    )
}

export default Home;
