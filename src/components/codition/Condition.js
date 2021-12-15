import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Condition extends Component {
    constructor() {
        super();

        this.state = {
            login: false
        }
    }

    handleLogin(){
        this.setState({login: true})
    }
    handleLogout(a){
        this.setState({login: a})
    }

    render() {
        if (this.state.login === true){
            return(
                <div className="mt-4">
                    {/*<button onClick={this.handleLogout.bind(this)} className="btn btn-danger">Logout</button>*/}
                    <button onClick={this.handleLogout.bind(this, false)} className="btn btn-danger">Logout</button>
                </div>
            )
        }else {
            return(
                <div className="mt-4">
                    <button onClick={this.handleLogin.bind(this)} className="btn btn-success">Login</button>
                </div>
            )
        }

    }
}

export default Condition