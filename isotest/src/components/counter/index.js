import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    /*const increment = () => {
        setCounter(counter + 1)
    }*/
    return ( <
        div >
        <
        span > { counter } < /span> <
        div >
        <
        button onClick = {
            () => setCounter(counter - 1) } > - < /button> <
        button onClick = {
            () => setCounter(counter + 1) } > + < /button> <
        /div>

        <
        /div>
    )
}

export default Counter