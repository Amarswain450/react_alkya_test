import React from 'react'
import "./Home.css"
import homeLogo from "../../assets/Logo_white.png"
import HomeSlider from '../../components/shared/HomeSlider/HomeSlider'

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="home-logo">
                    <img src={homeLogo} alt={homeLogo} />
                </div>
                <div className="home-heading">
                    Welcome Test
                </div>
                <div className="home-para">
                    Hope you having a good day!
                </div>
                <div className="photography-div">
                    <div className="photography-heading">
                        Photography
                    </div>
                    <div className='photography-carousel-div'>
                        <HomeSlider />
                    </div>
                </div>
                <div className="learning-div">
                    <div className="learning-heading">
                        Learning
                    </div>
                    <div className='photography-carousel-div'>
                        <HomeSlider />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home