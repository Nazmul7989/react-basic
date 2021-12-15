import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



function MyFunction(){

    function Demo(a){
        alert(a)
    }

    return(
        <button className="btn btn-danger" onClick={Demo.bind(this,'Hello i am from functional component')}>Click from Functional Component</button>
    )
}

export default MyFunction