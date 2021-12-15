import React,{Component} from 'react'

class PropsClass extends Component{
    render() {
        return(
            <div>
                <h3>Name: {this.props.studentInfo.name}</h3>
                <h3>Name: {this.props.studentInfo.age}</h3>
                <h3>Name: {this.props.studentInfo.university}</h3>
                <h3>Address: {this.props.address}</h3>
            </div>
        )

    }
}

export default PropsClass