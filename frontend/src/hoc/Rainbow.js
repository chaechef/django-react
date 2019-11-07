import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colors = ['red','orange', 'blue', 'green', 'pink','yellow'];
    const randomC = colors[Math.floor(Math.random() * 5)];
    const className = randomC + '-text';

    return( props) => {
        console.log(className)
        return (
            <div className={className}>
                <WrappedComponent {...props} />

            </div>
        )
    }
}
export default Rainbow