import React from 'react'

const Container = (props) => {
    return (
        <div className="container px-24 mx-auto">
            {props.children}
        </div>
    )
}

export default Container
