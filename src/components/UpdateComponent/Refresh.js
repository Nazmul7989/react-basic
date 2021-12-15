import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Refresh extends Component {
    constructor() {
        super();

        //Initialize the method
        this.resfresh = this.resfresh.bind(this)
    }

    resfresh(){
        this.forceUpdate()
    }


    render() {
        return (
            <div className="mt-4">
                <button onClick={this.resfresh} className="btn btn-success">Refresh Now</button>
                <h4>{Math.random()}</h4>
            </div>
        )
    }
}

export default Refresh