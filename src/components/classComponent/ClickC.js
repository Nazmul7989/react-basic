import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class ClickFunction extends Component{

    Test=(a)=>{
        alert(a)
    }

    render() {
        return(
            <button className="btn btn-primary" onClick={this.Test.bind(this,'Hello I am from Class Component')}>Click from Class Component</button>
        )
    }
}

export default ClickFunction