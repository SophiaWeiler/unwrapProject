import React from "react"

import Box from "./Box"




const CategoryList = (props) => {
    
    
    function renderBox(value, index) {
        return <Box key={index} number={props.array[index].number} label={props.word + props.array[index].term}/>
    }

        const values = props.postsByValue.map(renderBox)

        const finalList = []
        for(let step=0; step<props.total; step++){
            finalList.push(values[step])
        }
        
    return (
        <div>
            <h1 className="categoryTitle">{props.title}</h1>
            <div className = "category">
                <div className = "categoryTrack">
                    {finalList}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default CategoryList

