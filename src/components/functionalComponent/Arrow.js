import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Arrow = ()=>{
    const test = (a)=>{
        alert(a)
    }

    return(
        <button className="btn btn-warning" onClick={test.bind(this,"I am from arrow function")}>Click me for Arrow Function</button>
    )
}

export default Arrow