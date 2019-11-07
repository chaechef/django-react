import React from 'react'

const Contact = (props) =>{
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    console.log(props)
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>ContactContactContactContactContact</p>

        </div>
    )
}

export default Contact