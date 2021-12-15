import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

class ReactDom extends Component {

    myFun(){

        let element = <h3>Name has been changed. I am from React Dom</h3>
        let container = document.getElementById('dom')
        let callback = function (){
            alert('I am callback from React Dom')
        }

        ReactDOM.render(
            element,container,callback

        )
    }

    render() {
        return (
            <div className="mt-4">
                <div id="dom">My name is Md Nazmul Hasan</div>
                <button onClick={this.myFun} className="btn btn-success mt-3">Change Name</button>
            </div>
        );
    }
}

export default ReactDom;