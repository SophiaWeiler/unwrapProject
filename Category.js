import React from "react"

import Box from "./Box"

import { dayOfWeekAsString, timeOfDayAsString } from "./helperFunctions"


const CategoryList = (props) => {
    
    
    function renderBox(value, index) {
        console.log(value)
        if(props.labelFunction === dayOfWeekAsString || props.labelFunction === timeOfDayAsString){
            return <Box key={index} number={value} label={props.labelFunction(index)}/>
       }
       else{
            //return <Box key={index} number={value} label={props.word + props.array[index].term}/>
            return <Box key={index} number={props.array[index].number} label={props.word + props.array[index].term}/>
        }
    }
        console.log(props.postsByValue)
        const values = props.postsByValue.map(renderBox)

        const finalList = []
        for(let step=0; step<props.total; step++){
            finalList.push(values[step])
        }
        
    return (
        <div>
            <h1>{props.title}</h1>
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

