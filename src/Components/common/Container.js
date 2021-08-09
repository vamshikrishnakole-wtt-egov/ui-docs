import React from 'react'

const Container = (props) => {
    return (
        <div className="container xl:px-24 mx-auto px-4">
            {props.children}
        </div>
    )
}

export default Container
