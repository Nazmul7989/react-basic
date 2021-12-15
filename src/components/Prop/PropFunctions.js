import React from 'react'

function PropFunctions(props){
    return(
       <div>
           <h3>Name: {props.studentInfo.name}</h3>
           <h3>Name: {props.studentInfo.age}</h3>
           <h3>Name: {props.studentInfo.university}</h3>
           <h3>Address: {props.address}</h3>
       </div>
    )
}

export default PropFunctions