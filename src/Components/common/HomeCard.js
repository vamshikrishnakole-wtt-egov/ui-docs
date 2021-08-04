import React from 'react'
import { Link } from 'react-router-dom'
import arrowSign from "../../assets/img/arrow.png";

const HomeCard = (props) => {
    return (
            <div className="custom-shadow">
                <div className="flex px-4 py-8">
                <div className="pt-2">
                    <img src={props.brandLogo} alt={props.heading} className="w-8 h-8" />
                </div>
                <div className="pl-4 w-52">
                    <h2 className="text-2xl font-bold">{props.heading}</h2>
                    <p>{props.text}</p>
                    <div className="flex items-center">
                        <Link to="#" className="text-border">{props.linkContent}</Link>
                        <img src={arrowSign} alt="->" className="pl-2" />
                    </div>
                </div>
                </div>
            </div>
    )
}

export default HomeCard
