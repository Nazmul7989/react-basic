import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class ChangeState extends Component {
    constructor() {
        super();

        this.state = {
            name: 'Nazmul'
        }
    }

    changeName(a){
        this.setState({name: a})
    }


    render() {
        return (
            <div>
                <h2>{ this.state.name }</h2>
                <button onClick={this.changeName.bind(this,'Md Mizanur Rahman')} className="btn btn-primary">Change Name</button>
            </div>
        )
    }
}

export default ChangeState