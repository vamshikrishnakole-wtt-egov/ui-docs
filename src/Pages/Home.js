import React from 'react'
import Footer from '../Components/footer/Footer'
import HomeBanner from '../Components/home/HomeBanner'
import HomeContent from '../Components/home/HomeContent'
import Nabvar from '../Components/navbar/Nabvar'

const Home = () => {
    return (
        <div>
            <Nabvar />
            <HomeBanner />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home
