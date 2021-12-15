import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class Condition2 extends Component {

    constructor() {
        super();

        this.state = {
            login: false
        }
        //Initialize the function
        this.handleLogin = this.handleLogin.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogin(){
        this.setState({login: true})
    }
    handleLogout(){
        this.setState({login: false})
    }

    render() {
        return (
           // this.state.login? <h3>Please logout</h3> : <h3>Please login first</h3>
           this.state.login? (
               <div className="mt-4">
                   <button onClick={this.handleLogout}  className="btn btn-danger">Logout</button>
               </div>
           ) : (
               <div className="mt-4">
                   <button onClick={this.handleLogin}  className="btn btn-success">Login</button>
               </div>
           )
        )
    }
}

export default Condition2