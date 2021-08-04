import React from 'react'
import Container from './Container'
import "../../App.css"

const Banner = (props) => {
    return (
        <div className="w-full bg-banner_bg flex justify-center items-center banner_height">
            <Container>
            <div className="w-full h-full flex justify-between items-center">
                <div className="w-80">
                    <h2 className="text-white text-5xl font-bold font-sans leading-tight">{props.heading}</h2>
                    <hr className="my-2 text-border h-1 bg-border" />
                    <p className="text-white text-base font-normal font-sans">{props.para}</p>
                </div>
                <div className="banner_img">
                    <img src={props.Image} alt="banner" />
                </div>
            </div>
            </Container>
        </div>
    )
}

export default Banner
