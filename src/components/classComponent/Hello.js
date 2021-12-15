import React,{Component} from 'react'

class Hello extends Component{
    render() {
        return (
           <div>
               <h3> This is class component one  </h3>
               <h3> This is class component two</h3>
           </div>

            // <h4>{this.props.name}</h4>
        )
    }
}

export default Hello;