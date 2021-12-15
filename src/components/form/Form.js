import React, {Component} from 'react';

class Form extends Component {

    constructor() {
        super();

        this.state = {
            name: ''
        }
    }

    onChangeHandler=(event)=>{
        // let inputName = event.target.value
        // this.setState({name: inputName})

        let myName = event.target.name
        let nameValue = event.target.value

        this.setState({[myName] : nameValue})
    }

    onSubmitHandler= (event)=>{
        event.preventDefault()

        alert(this.state.name)
    }

    render() {
        return (
            <div className="mt-4">
                <form onSubmit={this.onSubmitHandler}>
                    <h3>Registration Form</h3>
                    <h4>My Name: { this.state.name }</h4>
                    <input onChange={this.onChangeHandler} name="name" type="text" placeholder="Your name"/>
                    <input type="submit"value="Submit"/>
                </form>
            </div>
        );
    }
}

export default Form;