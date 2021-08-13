import React from 'react'

const Card = (props) => {
    return (
        <div className="custom-shadow">
            {props.children}
        </div>
    )
}

export default Card
