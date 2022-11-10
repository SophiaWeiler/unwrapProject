//box component

import React from "react"

function Box(props){
    return (
        <div className = "box">
            <h2 className = "number">{props.number}</h2>
            <h4 className = "label">{props.label}</h4>
        </div>
    )
}


export default Box
