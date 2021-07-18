import React from 'react'

function GrandChield() {
    return (
        <div>
            <h1>GrandChild:</h1>
            <Child />
        </div>
    )
}

export default GrandChield;



export function Child() {
    return (
        <div>
            <h1>Child:</h1>
        </div>
    )
}


